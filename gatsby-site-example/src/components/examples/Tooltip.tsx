import { Grid, H3, H4, P, Tooltip } from '@nel-ui/react';
import React from 'react';

const TooltipExample = () => (
  <>
    <Grid>
      <Grid.Column>
        <H3>
          H3 with an inline tooltip
          <Tooltip id="h3-tooltip" aria-label="More info" spacing="left">
            Tooltip content
          </Tooltip>
        </H3>
      </Grid.Column>

      <Grid.Column>
        <H4>
          H4 with an inline tooltip
          <Tooltip id="h4-tooltip" aria-label="More info" spacing="left">
            Tooltip content
          </Tooltip>
        </H4>
      </Grid.Column>

      <Grid.Column>
        <P lead>
          Lead paragraph with an inline tooltip
          <Tooltip id="lead-paragraph-tooltip" aria-label="More info" spacing="left">
            Tooltip content
          </Tooltip>
        </P>
      </Grid.Column>

      <Grid.Column>
        <P>
          Paragraph with an inline tooltip
          <Tooltip id="paragraph-tooltip" aria-label="More info" spacing="left">
            Tooltip content
          </Tooltip>
        </P>
      </Grid.Column>
    </Grid>
  </>
);

export default TooltipExample;
