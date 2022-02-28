import { Portal, useMergeRefs } from "@chakra-ui/react";
import { arrow, autoPlacement, offset, shift, size, useFloating } from "@floating-ui/react-dom";
import { MutableRefObject, useRef } from "react";
import { VtmnTooltipWithRender, VtmnTooltipWithRenderProps } from "./VtmnTooltipWithRender";

export function VtmnTooltipWithPortal({
    children,
    tooltip,
    position,
    auto = true,
    style,
    containerRef,
    ...props
}: Omit<VtmnTooltipWithRenderProps<false>, "renderTooltip"> & {
    containerRef: MutableRefObject<HTMLDivElement>;
    auto?: boolean;
}) {
    const arrowRef = useRef(null);
    const {
        x,
        y,
        reference,
        floating,
        strategy,
        update,
        middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    } = useFloating({
        placement: (position || "top") as any,
        middleware: [
            shift(),
            offset(16),
            ...(auto ? [autoPlacement()] : []),
            size({
                apply({ reference }) {
                    Object.assign(innerFloatingRef.current.style, { width: `${reference.width}px` });
                },
            }),
            arrow({ element: arrowRef }),
        ],
    });
    const innerFloatingRef = useRef<HTMLDivElement>();
    const floatingMergedRef = useMergeRefs(innerFloatingRef, floating);

    const innerRef = useRef<HTMLDivElement>(null);
    const mergedReference = useMergeRefs(innerRef, reference);

    return (
        <VtmnTooltipWithRender
            {...props}
            renderTooltip={({ className, ...props }) => (
                <>
                    <span
                        ref={mergedReference}
                        onMouseEnter={() => (update(), (innerFloatingRef.current.style.opacity = "1"))}
                        onMouseLeave={() => (update(), (innerFloatingRef.current.style.opacity = "0"))}
                    >
                        {children}
                    </span>
                    <Portal containerRef={containerRef}>
                        <span
                            {...props}
                            ref={floatingMergedRef}
                            style={{
                                transition: "opacity 0.2s ease-in-out",
                                userSelect: "none",
                                fontFamily: "var(--vtmn-typo_font-family)",
                                fontSize: "var(--vtmn-typo_text-3-font-size)",
                                opacity: 0,
                                //
                                pointerEvents: "none",
                                width: "fit-content",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                padding: "0.5rem 0.75rem",
                                height: "2.25rem",
                                borderRadius: "var(--vtmn-radius_100)",
                                backgroundColor: "var(--vtmn-semantic-color_background-primary-reversed)",
                                color: "var(--vtmn-semantic-color_content-primary-reversed)",
                                //
                                ...style,
                                position: strategy,
                                top: y ?? "",
                                left: x ?? "",
                            }}
                        >
                            {children}
                            <div
                                ref={arrowRef}
                                style={{
                                    position: strategy,
                                    top: arrowY ?? "",
                                    left: arrowX ?? "",
                                    right: "",
                                    bottom: "",
                                    [{
                                        top: "bottom",
                                        left: "right",
                                        right: "left",
                                        bottom: "top",
                                    }[position]]: "-0.25rem",
                                    width: "13px",
                                    height: "13px",
                                    zIndex: "var(--vtmn-z-index_tooltip)",
                                    transform: "rotate(45deg)",
                                    marginLeft: "-9px",
                                }}
                            ></div>
                        </span>
                    </Portal>
                </>
            )}
        />
    );
}
