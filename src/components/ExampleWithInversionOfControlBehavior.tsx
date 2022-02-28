import { Box, chakra } from "@chakra-ui/react";
import { useRef } from "react";
import { VtmnTooltipWithPortal } from "./VtmnTooltipWithPortal";

export function ExampleWithInversionOfControlBehavior() {
    const portalRef = useRef<HTMLDivElement>();

    return (
        <Box d="flex" flexDirection="column" ref={portalRef}>
            <chakra.h1 color="green">with portal `VtmnTooltipWithPortal`, NOT cropped (nice)</chakra.h1>
            <div style={{ maxHeight: "200px", border: "1px solid black", overflow: "auto" }}>
                <table style={{ overflow: "hidden" }}>
                    <tbody>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal
                                    containerRef={portalRef}
                                    position="left"
                                    tooltip="this is NOT cropped"
                                    auto={false}
                                >
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal
                                    containerRef={portalRef}
                                    tooltip="this is NOT cropped"
                                    position="left"
                                    auto={false}
                                >
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltipWithPortal containerRef={portalRef} tooltip="this is NOT cropped">
                                    hover and see that its NOT cropped
                                </VtmnTooltipWithPortal>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Box>
    );
}
