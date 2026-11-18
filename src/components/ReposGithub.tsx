import { useFetchApi } from '../hooks/useFetchApi';
import { GitHubRepo } from '../types';
import { TagList } from './TagList';

const GITHUB_API_URL =
  'https://api.github.com/users/MatiasNail/repos?sort=updated&per_page=6';

export function ReposGitHub() {
  const { data: repos, loading, error, refetch } = useFetchApi<GitHubRepo[]>(GITHUB_API_URL);

  return (
    <div className="github-repos" style={{ marginTop: '3rem' }}>
      <h3 className="section-title-desktop">Repositorios recientes en GitHub</h3>

      {/* 1. Estado Cargando */}
      {loading && (
        <p className="github-repos__status" role="status" aria-live="polite">
          Cargando repositorios públicos desde GitHub...
        </p>
      )}

      {/* 2. Estado Error */}
      {error && (
        <div className="github-repos__status github-repos__status--error" role="alert">
          <p>No fue posible obtener los repositorios: {error}</p>
          <button type="button" onClick={refetch} className="contact-btn">
            Reintentar carga
          </button>
        </div>
      )}

      {/* 3. Estado Vacío */}
      {!loading && !error && repos && repos.length === 0 && (
        <p className="github-repos__status">
          No hay repositorios públicos disponibles en este momento.
        </p>
      )}

      {/* 4. Estado Éxito */}
      {!loading && !error && repos && repos.length > 0 && (
        <div>
          {repos.map((repo) => (
            <article key={repo.id} className="project-card">
              <a
                href={repo.html_url}
                className="project-card__link project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-card__year project-year">
                  {new Date(repo.updated_at).getFullYear()}
                </div>
                <div className="project-card__info project-info">
                  <h4 className="project-card__title project-title">
                    {repo.name} {repo.stargazers_count > 0 ? `★ ${repo.stargazers_count}` : ''}
                  </h4>
                  <p className="project-card__desc project-desc">
                    {repo.description ?? 'Repositorio sin descripción en GitHub.'}
                  </p>
                  {repo.language && (
                    <TagList tags={[repo.language]} ariaLabel="Lenguaje principal" />
                  )}
                </div>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}