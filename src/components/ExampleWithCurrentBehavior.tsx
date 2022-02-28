import { Box, chakra } from "@chakra-ui/react";
import { VtmnTooltip } from "@vtmn/react";

export function ExampleWithCurrentBehavior() {
    return (
        <Box d="flex" flexDirection="column">
            <chakra.h1 color="red">current `VtmnTooltip`, cropped (bad)</chakra.h1>
            <div style={{ maxHeight: "200px", border: "1px solid black", overflow: "auto" }}>
                <table style={{ overflow: "hidden" }}>
                    <tbody>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <VtmnTooltip tooltip="this is cropped">hover and see that its cropped</VtmnTooltip>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Box>
    );
}
