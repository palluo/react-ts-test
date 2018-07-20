
export class Privilege {
    widgetOnScreen: {
        widgets: Widget[]
    }
    widgetPool: {
        widgets: Widget[]
        groups: Widget[]
    }
    map: {
        position: Position
        basemaps: ServiceConfig[]
        operationallayers: ServiceConfig[]
        geometryService: ServiceConfig
        mapOptions: MapOptions
        threeD: boolean
        twoD: boolean
    }
    appBase: {
        appThems: AppThems
        systemParameter: SystemParameter
    }
}

export class Widget {
    id: string | null
    name: string | null
    icon: string | null
    uri: string | null
    version: string | null
    config: string | null
    configContent: string | null
    containerId: string | null
    thems: Thems
    position: Position
}

export class SystemParameter {
    systemName: string | null = null
    themsColor: string | null = null
}
export class Thems {
    backgroundColor: string | null = null
    color: string | null = null
    fontFamily: string | null = null
}
export class AppThems extends  Thems {
    fontSize: number | null = null
    themsColor: string | null = null
}

export class WidgetThems extends Thems {
    width: number | null
    height: number | null
}
export class SetWidgetThems extends Thems {
    width: string | null
    height: string | null
}

export class Position {
    left: number | null = null
    right: number | null = null
    top: number | null = null
    bottom: number | null = null
    width: number | null = null
    height: number | null = null
}
export class SetPosition {
    left: string | null
    right: string | null
    top: string | null
    bottom: string | null
    width: string | null
    height: string | null
}
export class ServiceConfig {
    guid: string | null
    name: string | null
    url: string | null
    type: string | null
    icon: string | null
    visible: boolean
    dynamicToken: boolean
}

export class MapOptions {
    extent: {
        xmin: number | null
        ymin: number | null
        xmax: number | null
        ymax: number | null
    }
    slider: boolean
}

export class WidgetContainerPosition extends Position {
    position: string
}