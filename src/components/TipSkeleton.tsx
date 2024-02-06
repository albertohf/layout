import ContentLoader from "react-content-loader";

const TipSkeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={70}
    viewBox="0 0 300 70"
    backgroundColor="#faa500"
    foregroundColor="#ecebeb"
  >
    <circle cx="583" cy="533" r="15" />
    <rect x="437" y="218" rx="2" ry="2" width="140" height="10" />
    <rect x="6" y="332" rx="0" ry="0" width="39" height="34" />
    <rect x="62" y="332" rx="0" ry="0" width="39" height="34" />
    <rect x="113" y="332" rx="0" ry="0" width="39" height="34" />
    <rect x="165" y="332" rx="0" ry="0" width="39" height="34" />
    <rect x="5" y="377" rx="0" ry="0" width="451" height="23" />
    <rect x="2" y="407" rx="0" ry="0" width="520" height="23" />
    <rect x="3" y="439" rx="0" ry="0" width="473" height="23" />
    <rect x="-31" y="535" rx="0" ry="0" width="473" height="23" />
    <rect x="-2" y="472" rx="0" ry="0" width="473" height="23" />
    <rect x="-5" y="504" rx="0" ry="0" width="473" height="23" />
    <circle cx="36" cy="35" r="29" />
    <rect x="69" y="9" rx="0" ry="0" width="249" height="29" />
    <rect x="69" y="42" rx="0" ry="0" width="249" height="29" />
  </ContentLoader>
);

export default TipSkeleton;
