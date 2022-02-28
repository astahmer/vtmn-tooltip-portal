import * as React from "react";

export type VtmnTooltipPosition = LiteralUnion<
    "bottom-left" | "bottom" | "bottom-right" | "left" | "right" | "top-left" | "top" | "top-right"
>;

// https://github.com/microsoft/TypeScript/issues/29729
type LiteralUnion<T extends U, U = string> = T | (U & {});

interface BasicProps {
    /**
     * The position of tooltip from original element.
     * @defaultValue 'top'
     */
    position?: VtmnTooltipPosition;

    /**
     * The tooltip text of the span.
     * @defaultValue undefined
     */
    tooltip: string;

    /**
     * The content to render inside the component.
     * @defaultValue undefined
     */
    children: React.ReactNode;
    renderTooltip?: never;
}

interface WithRenderProps {
    renderTooltip?: (props: { tabIndex: number; className: string }) => React.ReactNode;
    tooltip?: never;
}

type TooltipProps<RenderFn extends boolean = undefined> = true extends RenderFn
    ? WithRenderProps
    : false extends RenderFn
    ? BasicProps
    : BasicProps & WithRenderProps;
export type VtmnTooltipWithRenderProps<RenderFn extends boolean> = React.ComponentPropsWithoutRef<"span"> &
    TooltipProps<RenderFn>;

function VtmnTooltipWithRenderBase({
    position = "top",
    tooltip,
    className,
    children,
    renderTooltip,
    externalRef,
    ...props
}: VtmnTooltipWithRenderProps<undefined> & { externalRef?: React.ForwardedRef<HTMLDivElement> }) {
    const tooltipProps = { tabIndex: 0, className: `vtmn-tooltip${className ? " " + className : ""}`, ...props };

    return (
        <div className="vtmn-flex" ref={externalRef}>
            {renderTooltip ? (
                (renderTooltip as WithRenderProps["renderTooltip"])(tooltipProps)
            ) : (
                <span {...tooltipProps} data-tooltip={tooltip} data-position={position} {...props}>
                    {children}
                </span>
            )}
        </div>
    );
}

export const VtmnTooltipWithRender = React.forwardRef<HTMLDivElement, VtmnTooltipWithRenderProps<never>>(
    (props, ref) => <VtmnTooltipWithRenderBase {...props} externalRef={ref} />
) as <RenderFn extends boolean>(
    props: VtmnTooltipWithRenderProps<RenderFn> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof VtmnTooltipWithRenderBase>;
