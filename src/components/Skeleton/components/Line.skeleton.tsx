import ContentLoader from "react-content-loader";

export const LineSkeleton = (props: any) => (
  <ContentLoader
    speed={3}
    width={1800}
    height={250}
    viewBox="0 0 1800 250"
    backgroundColor="#f0ebeb"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="1800" height="250" />
    <rect x="10" y="30" rx="10" ry="10" width="140" height="50" />
  </ContentLoader>
);
