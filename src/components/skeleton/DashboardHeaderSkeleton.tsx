import ContentLoader from "react-content-loader";

export const DashboardHeaderSkeleton = (props: any) => (
  <ContentLoader
    speed={10}
    width={2500}
    height={50}
    viewBox="0 0 2500 50"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="2500" height="80" />
  </ContentLoader>
);
