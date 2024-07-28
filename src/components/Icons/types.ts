import { DOMAttributes, SVGAttributes } from "react";

export type IconProps = DOMAttributes<SVGElement> & {
    className?: SVGAttributes<SVGElement>['className']
}
