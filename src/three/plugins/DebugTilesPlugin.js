import { DebugTilesPlugin as DebugTilesPluginImpl } from '3d-tiles-renderer/plugins';

export {
	NONE,
	SCREEN_ERROR,
	GEOMETRIC_ERROR,
	DISTANCE,
	DEPTH,
	RELATIVE_DEPTH,
	IS_LEAF,
	RANDOM_COLOR,
	RANDOM_NODE_COLOR,
	CUSTOM_COLOR,
	LOAD_ORDER,
} from '3d-tiles-renderer/plugins';

export class DebugTilesPlugin extends DebugTilesPluginImpl {

	constructor( ...args ) {

		super( ...args );
		console.warn( 'DebugTilesPlugin: Plugins should now be imported from "3d-tiles-renderer/plugins" path.' );

	}

}
