# `catalogWorkspaceBinding` Submodule <a name="`catalogWorkspaceBinding` Submodule" id="@cdktn/provider-databricks.catalogWorkspaceBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogWorkspaceBinding <a name="CatalogWorkspaceBinding" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding databricks_catalog_workspace_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer"></a>

```typescript
import { catalogWorkspaceBinding } from '@cdktn/provider-databricks'

new catalogWorkspaceBinding.CatalogWorkspaceBinding(scope: Construct, id: string, config: CatalogWorkspaceBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig">CatalogWorkspaceBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig">CatalogWorkspaceBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetBindingType">resetBindingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableName">resetSecurableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableType">resetSecurableType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.putProviderConfig"></a>

```typescript
public putProviderConfig(value: CatalogWorkspaceBindingProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig">CatalogWorkspaceBindingProviderConfig</a>

---

##### `resetBindingType` <a name="resetBindingType" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetBindingType"></a>

```typescript
public resetBindingType(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSecurableName` <a name="resetSecurableName" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableName"></a>

```typescript
public resetSecurableName(): void
```

##### `resetSecurableType` <a name="resetSecurableType" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableType"></a>

```typescript
public resetSecurableType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CatalogWorkspaceBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct"></a>

```typescript
import { catalogWorkspaceBinding } from '@cdktn/provider-databricks'

catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement"></a>

```typescript
import { catalogWorkspaceBinding } from '@cdktn/provider-databricks'

catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource"></a>

```typescript
import { catalogWorkspaceBinding } from '@cdktn/provider-databricks'

catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport"></a>

```typescript
import { catalogWorkspaceBinding } from '@cdktn/provider-databricks'

catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CatalogWorkspaceBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CatalogWorkspaceBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CatalogWorkspaceBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CatalogWorkspaceBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference">CatalogWorkspaceBindingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingTypeInput">bindingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig">CatalogWorkspaceBindingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableNameInput">securableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableTypeInput">securableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceIdInput">workspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingType">bindingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableName">securableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.providerConfig"></a>

```typescript
public readonly providerConfig: CatalogWorkspaceBindingProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference">CatalogWorkspaceBindingProviderConfigOutputReference</a>

---

##### `bindingTypeInput`<sup>Optional</sup> <a name="bindingTypeInput" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingTypeInput"></a>

```typescript
public readonly bindingTypeInput: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: CatalogWorkspaceBindingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig">CatalogWorkspaceBindingProviderConfig</a>

---

##### `securableNameInput`<sup>Optional</sup> <a name="securableNameInput" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableNameInput"></a>

```typescript
public readonly securableNameInput: string;
```

- *Type:* string

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableTypeInput"></a>

```typescript
public readonly securableTypeInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: number;
```

- *Type:* number

---

##### `bindingType`<sup>Required</sup> <a name="bindingType" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingType"></a>

```typescript
public readonly bindingType: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securableName`<sup>Required</sup> <a name="securableName" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableName"></a>

```typescript
public readonly securableName: string;
```

- *Type:* string

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogWorkspaceBindingConfig <a name="CatalogWorkspaceBindingConfig" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.Initializer"></a>

```typescript
import { catalogWorkspaceBinding } from '@cdktn/provider-databricks'

const catalogWorkspaceBindingConfig: catalogWorkspaceBinding.CatalogWorkspaceBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.workspaceId">workspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.bindingType">bindingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig">CatalogWorkspaceBindingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableName">securableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableType">securableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}.

---

##### `bindingType`<sup>Optional</sup> <a name="bindingType" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.bindingType"></a>

```typescript
public readonly bindingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: CatalogWorkspaceBindingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig">CatalogWorkspaceBindingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#provider_config CatalogWorkspaceBinding#provider_config}

---

##### `securableName`<sup>Optional</sup> <a name="securableName" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableName"></a>

```typescript
public readonly securableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}.

---

##### `securableType`<sup>Optional</sup> <a name="securableType" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}.

---

### CatalogWorkspaceBindingProviderConfig <a name="CatalogWorkspaceBindingProviderConfig" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig.Initializer"></a>

```typescript
import { catalogWorkspaceBinding } from '@cdktn/provider-databricks'

const catalogWorkspaceBindingProviderConfig: catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogWorkspaceBindingProviderConfigOutputReference <a name="CatalogWorkspaceBindingProviderConfigOutputReference" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.Initializer"></a>

```typescript
import { catalogWorkspaceBinding } from '@cdktn/provider-databricks'

new catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig">CatalogWorkspaceBindingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CatalogWorkspaceBindingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingProviderConfig">CatalogWorkspaceBindingProviderConfig</a>

---



