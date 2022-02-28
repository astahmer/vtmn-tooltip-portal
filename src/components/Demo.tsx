import { Stack } from "@chakra-ui/react";
import { ExampleWithCurrentBehavior } from "./ExampleWithCurrentBehavior";
import { ExampleWithInversionOfControlBehavior } from "./ExampleWithInversionOfControlBehavior";

export const Demo = () => {
    return (
        <Stack m="auto" spacing="8">
            <ExampleWithCurrentBehavior />
            <ExampleWithInversionOfControlBehavior />
        </Stack>
    );
};
