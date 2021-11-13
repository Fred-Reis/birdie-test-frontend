import ContentLoader from "react-content-loader";

export const ProfileCardSkeleton = (props: any) => (
  <ContentLoader
    speed={3}
    width={220}
    height={360}
    viewBox="0 0 220 360"
    backgroundColor="#f0ebeb"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="48" y="60" rx="10" ry="0" width="100" height="20" />
    <circle cx="95" cy="150" r="40" />
    <rect x="0" y="229" rx="10" ry="0" width="200" height="30" />
    <rect x="0" y="272" rx="10" ry="0" width="200" height="30" />
    <rect x="0" y="319" rx="10" ry="0" width="200" height="30" />
  </ContentLoader>
);
