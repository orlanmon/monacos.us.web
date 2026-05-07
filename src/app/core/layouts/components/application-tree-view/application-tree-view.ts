import { Component } from '@angular/core';
import { TreeViewService } from '../../../services/treeviewservice/tree-view-service';
import { TreeViewItem } from '../../../interfaces/treeviewitem';
import { effect } from '@angular/core';
import { MatTree, MatTreeNode, MatTreeNodeDef, MatNestedTreeNode,MatTreeNestedDataSource } from '@angular/material/tree';
import { MatIcon } from '@angular/material/icon';
import { MatTreeNodePadding, MatTreeNodeToggle } from '@angular/material/tree';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-application-tree-view',
  imports: [ MatTree, MatTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle],
  templateUrl: './application-tree-view.html',
  styleUrl: './application-tree-view.css',
})
export class ApplicationTreeView {

  public treeViewItems? : TreeViewItem[];

  public buildTreeView: boolean = false;
  
  //public dataSource? : TreeViewItem[] = [];

  public dataSource = new MatTreeNestedDataSource<TreeViewItem>();
  
  public childrenAccessor = (node: TreeViewItem) => node.children ?? [];

  public hasChild = (_: number, node: TreeViewItem) => node.children == undefined || node.children.length > 0;

  @ViewChild('tree') tree?: MatTree<any>;

 constructor(private treeViewService : TreeViewService) {

  
    
  effect(() => {
      
    
    this.treeViewItems = this.treeViewService.SignalTreeViewItems();

    //if( this.treeViewItems != undefined && this.treeViewItems.length > 0  )
      if( this.treeViewItems.length > 0  )
        
        this.dataSource.data = this.treeViewItems;
        //this.dataSource = this.treeViewItems;


        this.refreshTreeView();

    })


 }

 ngOnInit() {


 }

 private refreshTreeView() {

    this.buildTreeView = true;

     if(this.tree ) {
    this.tree.expandAll();
  }


 }
 
 
 ngAfterViewInit() {

  if(this.tree ) {
    this.tree.expandAll();
  }

}


}



