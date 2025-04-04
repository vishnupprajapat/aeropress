import { EarthGlobeIcon } from "@sanity/icons";
const GlobeIcon = () => <EarthGlobeIcon style={{ marginLeft: "0.05em", marginRight: "0.1em", width: "0.75em" }} />;

import { ComponentProps } from "react";

const LinkAnnotation = (props: ComponentProps<any>) => (
  <span>
    <GlobeIcon />
    {props.renderDefault(props)}
  </span>
);

export default LinkAnnotation;
