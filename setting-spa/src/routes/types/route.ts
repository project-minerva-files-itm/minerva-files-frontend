import { Page } from './page';

export interface OpenNoFrameProps extends Page {
    name: string;
    path: string;
    element: React.ReactElement;
}

declare module './route' {
    export function openNoFrame(props: OpenNoFrameProps): JSX.Element;
}
