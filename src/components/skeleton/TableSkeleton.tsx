import ContentLoader from "react-content-loader";

export const TableSkeleton = (props: any) => (
  <ContentLoader
    speed={10}
    width={800}
    height={400}
    viewBox="0 0 800 400"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="90" rx="5" ry="5" width="800" height="60" />
    <rect x="0" y="165" rx="5" ry="5" width="800" height="60" />
    <rect x="0" y="239" rx="5" ry="5" width="800" height="60" />
    <rect x="0" y="316" rx="5" ry="5" width="800" height="60" />
  </ContentLoader>
);
