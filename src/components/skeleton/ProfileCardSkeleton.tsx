import ContentLoader from "react-content-loader";

export const ProfileCardSkeleton = (props: any) => (
  <ContentLoader
    speed={10}
    width={220}
    height={360}
    viewBox="0 0 220 360"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="104" cy="122" r="71" />
    <rect x="10" y="229" rx="0" ry="0" width="200" height="30" />
    <rect x="10" y="272" rx="0" ry="0" width="200" height="30" />
    <rect x="10" y="319" rx="0" ry="0" width="200" height="30" />
    <rect x="160" y="340" rx="0" ry="0" width="0" height="4" />
  </ContentLoader>
);
