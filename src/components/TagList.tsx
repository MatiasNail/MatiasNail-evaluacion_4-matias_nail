interface TagListProps {
  tags: string[];
  ariaLabel: string;
}

export function TagList({ tags, ariaLabel }: TagListProps) {
  return (
    <ul className="tags" aria-label={ariaLabel}>
      {tags.map((tag) => (
        <li key={tag} className="tags__item">
          {tag}
        </li>
      ))}
    </ul>
  );
}