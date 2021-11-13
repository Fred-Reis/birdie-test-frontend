import ContentLoader from "react-content-loader";

export const DoughnutSkeleton = (props: any) => (
  <ContentLoader
    speed={3}
    width={400}
    height={450}
    viewBox="0 0 400 450"
    backgroundColor="#f0ebeb"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <circle cx="200" cy="177" r="128" />
    <rect x="20" y="343" rx="0" ry="0" width="340" height="40" />
    <rect x="20" y="403" rx="0" ry="0" width="340" height="40" />
  </ContentLoader>
);
