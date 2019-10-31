# View Module

## Content Views

Make sure that all new components and directives are imported and exported within the correct modules. To ensure consistency we recommend using the angular cli.
```` 
#generate component

ng g c $new_component_path --module $module_name 

#generate directive

ng g d $new_directive_paht --module $module_name

#if --module is not provided cli will import the component within the next module up the path-tree
````

### Register new main view

All additional main views (e.g. Home) can be created directly inside the view folder (e.g. /modules/view/home/home.component.ts).

Each Main view should consist of at least two components:  
1. Main Component (e.g. home.component.ts)  
  Represents the main container for this view and is responsible for routing to different extensions of this view.  It should atleast point to the default implementation (e.g. /modules/view/model/default/default-home/).
  
    (see [detail-component](./detail/detail.component.html))

2. Layout Component (e.g. home-layout.component.ts)  
  Defines how components are loaded into the main container.
  This can be done with ng-content elements which filter different directives.
  
    (see [detail-layout](./detail/detail-layout.component.html))

## View Organisation

To ensure our views stay customizable we introduce a schema on how to extend the main view discussed above.

### Building Blocks

We can split up a page in different building blocks (e.g. title, image, description etc.).  All such elements can be found and reused inside the base folder (/modules/view/base).  These components should work independently.  
+ Use [ConfigService](../config/services/config.service.ts) to get or set any used variables 
+ Use [ApolloSerive](../data/services/apollo.service.ts) to request exactly what that component needs.    


(see [TitleComponent](./base/components/title/title.component.ts))



### Multiple Implementations

Most of the time our views change based on the type of data we have.
Within the model folder (/modules/view/model) we can define the different types we want to display including a default implementation.

````
#home.component.html

<ng-container [ngSwitch]="config">

  <app-special-home *ngSwitchCase="'special'">
  </app-special-home>

  <app-default-home *ngSwitchDefault>
  </app-default-home>

</ng-container>


#home-layout.html

<!-- we can route differet child components to different "ports" based on the provided directive -->
<ng-content select="[mydirective]"></ng-content>
<ng-content select="[different-directive]"></ng-content>


#default-home.component.html

<app-home-layout>
  <!-- send any components to the layout content -->
  <app-title mydirective>
  <app-description different-directive>
</app-home-layout>


#client-home.component.html

<app-home-layout>
  <app-title different-directive>
</app-home-layout>
````