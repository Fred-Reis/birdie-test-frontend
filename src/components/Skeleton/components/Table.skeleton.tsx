import ContentLoader from "react-content-loader";

export const TableSkeleton = (props: any) => (
  <ContentLoader
    speed={3}
    width={1000}
    height={500}
    viewBox="0 0 1000 500"
    backgroundColor="#f0ebeb"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="380" y="30" rx="5" ry="5" width="200" height="30" />
    <rect x="800" y="30" rx="5" ry="5" width="200" height="30" />
    <rect x="0" y="30" rx="5" ry="5" width="200" height="30" />
    <rect x="0" y="90" rx="5" ry="5" width="1000" height="60" />
    <rect x="0" y="165" rx="5" ry="5" width="1000" height="60" />
    <rect x="0" y="239" rx="5" ry="5" width="1000" height="60" />
    <rect x="0" y="316" rx="5" ry="5" width="1000" height="60" />
    <rect x="0" y="396" rx="5" ry="5" width="1000" height="60" />
  </ContentLoader>
);
