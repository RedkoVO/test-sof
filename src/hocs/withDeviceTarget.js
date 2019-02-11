import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import withWidth from '@material-ui/core/withWidth'

export default compose(
  withWidth(),
  mapProps(({ width, ...rest }) => ({
    ...rest,
    isTablet: ['xs', 'sm'].includes(width)
  }))
)