import ContentLoader from "react-content-loader";

export const InfoCardSkeleton = (props: any) => (
  <ContentLoader
    speed={10}
    width={220}
    height={100}
    viewBox="0 0 220 100"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="15" rx="0" ry="0" width="200" height="30" />
    <rect x="0" y="64" rx="0" ry="0" width="200" height="30" />
  </ContentLoader>
);
