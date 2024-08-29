import {Global} from '@emotion/react';

// The styles imported from the design system.
import {global as designSystemGlobal} from '@npmtestliffi/learnstorybook-design-system-template';
import {Preview} from "@storybook/react";

const {GlobalStyle} = designSystemGlobal;

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
    /*
    * Adds a global decorator to include the imported styles from the design system.
    * More on Storybook decorators at:
    * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
    */
    decorators: [
        (Story) => (
            <>
                <Global styles={GlobalStyle}/>
                <Story/>
            </>
        ),
    ],
    /*
    * More on Storybook parameters at:
    * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
    */
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
