export interface TreeViewItem {

    text: string
    imageUrl: string,
    url: string,
    target: string,
    level: number,
    children: TreeViewItem[],
    navigationItemID: number
}