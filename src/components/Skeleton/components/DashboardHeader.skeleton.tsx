import ContentLoader from "react-content-loader";

export const DashboardHeaderSkeleton = (props: any) => (
  <ContentLoader
    speed={3}
    width={2200}
    height={60}
    viewBox="0 0 2200 60"
    backgroundColor="#f0ebeb"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="10" y="15" rx="10" ry="10" width="140" height="40" />
    <rect x="180" y="15" rx="10" ry="10" width="140" height="40" />
    <circle cx="900" cy="30" r="30" />
    <rect x="990" y="15" rx="10" ry="10" width="300" height="40" />
    <rect x="1900" y="15" rx="10" ry="10" width="250" height="40" />
  </ContentLoader>
);
