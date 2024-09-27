import { OpenNoFrameProps } from "bm-react-lib";

declare module './route' {
    export function openNoFrame(props: OpenNoFrameProps): JSX.Element;
}