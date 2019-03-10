export interface Activity {
    id: string
    name: string
    publisher: string
    status: 0 | 1 | 2 | 3
    startTime?: string
    endTime?: string
}

export interface BackFormItem {
    extension: ExtensionType
    name: string
    type: string
    unique: boolean
    defaultValue?: string
    description: string
    tip: string
    require: boolean
    case?: string[]
    range?: number[]
    subItem?: BackFormItem[]
}

export interface ExtensionDesc {
    caseEditable: boolean
    rangeName: string
}

export interface FormItem {
    id: bigint
    readonly extension: ExtensionType
    name: string
    readonly type: string
    unique: boolean
    defaultValue: string //checkable
    description: string
    tip: string
    require: boolean
    case?: string[]
    useRange: boolean
    range: number[]
    subItem?: FormItem[]
    readonly caseEditable: boolean
    readonly rangeName: string
}

export type FormItemType =
    | 'name'
    | 'unique'
    | 'defaultValue'
    | 'description'
    | 'tip'
    | 'require'
    | 'case'
    | 'useRange'
    | 'range'
    | 'subItem'

export interface DragData {
    id: bigint
    originIndex: number
    type: ExtensionType
}

export type ExtensionType = 'text'

export interface EditorData {
    id: string
    name: string
    startTime?: string
    endTime?: string
    items: BackFormItem[]
}
