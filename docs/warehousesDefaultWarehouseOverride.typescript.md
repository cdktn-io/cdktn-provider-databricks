# `warehousesDefaultWarehouseOverride` Submodule <a name="`warehousesDefaultWarehouseOverride` Submodule" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehousesDefaultWarehouseOverride <a name="WarehousesDefaultWarehouseOverride" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override databricks_warehouses_default_warehouse_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer"></a>

```typescript
import { warehousesDefaultWarehouseOverride } from '@cdktn/provider-databricks'

new warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride(scope: Construct, id: string, config: WarehousesDefaultWarehouseOverrideConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig">WarehousesDefaultWarehouseOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig">WarehousesDefaultWarehouseOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig"></a>

```typescript
public putProviderConfig(value: WarehousesDefaultWarehouseOverrideProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetWarehouseId"></a>

```typescript
public resetWarehouseId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct"></a>

```typescript
import { warehousesDefaultWarehouseOverride } from '@cdktn/provider-databricks'

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement"></a>

```typescript
import { warehousesDefaultWarehouseOverride } from '@cdktn/provider-databricks'

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource"></a>

```typescript
import { warehousesDefaultWarehouseOverride } from '@cdktn/provider-databricks'

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport"></a>

```typescript
import { warehousesDefaultWarehouseOverride } from '@cdktn/provider-databricks'

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WarehousesDefaultWarehouseOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WarehousesDefaultWarehouseOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WarehousesDefaultWarehouseOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference">WarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideIdInput">defaultWarehouseOverrideIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId">defaultWarehouseOverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfig"></a>

```typescript
public readonly providerConfig: WarehousesDefaultWarehouseOverrideProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference">WarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a>

---

##### `defaultWarehouseOverrideIdInput`<sup>Optional</sup> <a name="defaultWarehouseOverrideIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideIdInput"></a>

```typescript
public readonly defaultWarehouseOverrideIdInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | WarehousesDefaultWarehouseOverrideProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `defaultWarehouseOverrideId`<sup>Required</sup> <a name="defaultWarehouseOverrideId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId"></a>

```typescript
public readonly defaultWarehouseOverrideId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WarehousesDefaultWarehouseOverrideConfig <a name="WarehousesDefaultWarehouseOverrideConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.Initializer"></a>

```typescript
import { warehousesDefaultWarehouseOverride } from '@cdktn/provider-databricks'

const warehousesDefaultWarehouseOverrideConfig: warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.defaultWarehouseOverrideId">defaultWarehouseOverrideId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultWarehouseOverrideId`<sup>Required</sup> <a name="defaultWarehouseOverrideId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.defaultWarehouseOverrideId"></a>

```typescript
public readonly defaultWarehouseOverrideId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: WarehousesDefaultWarehouseOverrideProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}.

---

### WarehousesDefaultWarehouseOverrideProviderConfig <a name="WarehousesDefaultWarehouseOverrideProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.Initializer"></a>

```typescript
import { warehousesDefaultWarehouseOverride } from '@cdktn/provider-databricks'

const warehousesDefaultWarehouseOverrideProviderConfig: warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehousesDefaultWarehouseOverrideProviderConfigOutputReference <a name="WarehousesDefaultWarehouseOverrideProviderConfigOutputReference" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer"></a>

```typescript
import { warehousesDefaultWarehouseOverride } from '@cdktn/provider-databricks'

new warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WarehousesDefaultWarehouseOverrideProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---



