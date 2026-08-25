# `postgresSyncedTable` Submodule <a name="`postgresSyncedTable` Submodule" id="@cdktn/provider-databricks.postgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSyncedTable <a name="PostgresSyncedTable" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTable(scope: Construct, id: string, config: PostgresSyncedTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig">PostgresSyncedTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig">PostgresSyncedTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig"></a>

```typescript
public putProviderConfig(value: PostgresSyncedTableProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec"></a>

```typescript
public putSpec(value: PostgresSyncedTableSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

postgresSyncedTable.PostgresSyncedTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

postgresSyncedTable.PostgresSyncedTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

postgresSyncedTable.PostgresSyncedTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

postgresSyncedTable.PostgresSyncedTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresSyncedTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput">specInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput">syncedTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId">syncedTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresSyncedTableProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec"></a>

```typescript
public readonly spec: PostgresSyncedTableSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status"></a>

```typescript
public readonly status: PostgresSyncedTableStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | PostgresSyncedTableProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | PostgresSyncedTableSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---

##### `syncedTableIdInput`<sup>Optional</sup> <a name="syncedTableIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput"></a>

```typescript
public readonly syncedTableIdInput: string;
```

- *Type:* string

---

##### `syncedTableId`<sup>Required</sup> <a name="syncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId"></a>

```typescript
public readonly syncedTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSyncedTableConfig <a name="PostgresSyncedTableConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableConfig: postgresSyncedTable.PostgresSyncedTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId">syncedTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `syncedTableId`<sup>Required</sup> <a name="syncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId"></a>

```typescript
public readonly syncedTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresSyncedTableProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec"></a>

```typescript
public readonly spec: PostgresSyncedTableSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}.

---

### PostgresSyncedTableProviderConfig <a name="PostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableProviderConfig: postgresSyncedTable.PostgresSyncedTableProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}.

---

### PostgresSyncedTableSpec <a name="PostgresSyncedTableSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableSpec: postgresSyncedTable.PostgresSyncedTableSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.acceleratedSync">acceleratedSync</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#accelerated_sync PostgresSyncedTable#accelerated_sync}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId">existingPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.extraColumns">extraColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#extra_columns PostgresSyncedTable#extra_columns}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName">sourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey">timeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.typeOverrides">typeOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#type_overrides PostgresSyncedTable#type_overrides}. |

---

##### `acceleratedSync`<sup>Optional</sup> <a name="acceleratedSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.acceleratedSync"></a>

```typescript
public readonly acceleratedSync: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#accelerated_sync PostgresSyncedTable#accelerated_sync}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}.

---

##### `createDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```typescript
public readonly createDatabaseObjectsIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}.

---

##### `existingPipelineId`<sup>Optional</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId"></a>

```typescript
public readonly existingPipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}.

---

##### `extraColumns`<sup>Optional</sup> <a name="extraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.extraColumns"></a>

```typescript
public readonly extraColumns: IResolvable | PostgresSyncedTableSpecExtraColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#extra_columns PostgresSyncedTable#extra_columns}.

---

##### `newPipelineSpec`<sup>Optional</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec"></a>

```typescript
public readonly newPipelineSpec: PostgresSyncedTableSpecNewPipelineSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}.

---

##### `postgresDatabase`<sup>Optional</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}.

---

##### `primaryKeyColumns`<sup>Optional</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```typescript
public readonly primaryKeyColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}.

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}.

---

##### `sourceTableFullName`<sup>Optional</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName"></a>

```typescript
public readonly sourceTableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}.

---

##### `timeseriesKey`<sup>Optional</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey"></a>

```typescript
public readonly timeseriesKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}.

---

##### `typeOverrides`<sup>Optional</sup> <a name="typeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.typeOverrides"></a>

```typescript
public readonly typeOverrides: IResolvable | PostgresSyncedTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#type_overrides PostgresSyncedTable#type_overrides}.

---

### PostgresSyncedTableSpecExtraColumns <a name="PostgresSyncedTableSpecExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableSpecExtraColumns: postgresSyncedTable.PostgresSyncedTableSpecExtraColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnType">columnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#column_type PostgresSyncedTable#column_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.compute">compute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#compute PostgresSyncedTable#compute}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.maintenance">maintenance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#maintenance PostgresSyncedTable#maintenance}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}.

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#column_type PostgresSyncedTable#column_type}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.compute"></a>

```typescript
public readonly compute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#compute PostgresSyncedTable#compute}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.maintenance"></a>

```typescript
public readonly maintenance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#maintenance PostgresSyncedTable#maintenance}.

---

### PostgresSyncedTableSpecNewPipelineSpec <a name="PostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableSpecNewPipelineSpec: postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.pipelineChannel">pipelineChannel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#pipeline_channel PostgresSyncedTable#pipeline_channel}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">storageCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">storageSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}.

---

##### `pipelineChannel`<sup>Optional</sup> <a name="pipelineChannel" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.pipelineChannel"></a>

```typescript
public readonly pipelineChannel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#pipeline_channel PostgresSyncedTable#pipeline_channel}.

---

##### `storageCatalog`<sup>Optional</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```typescript
public readonly storageCatalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}.

---

##### `storageSchema`<sup>Optional</sup> <a name="storageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```typescript
public readonly storageSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}.

---

### PostgresSyncedTableSpecTypeOverrides <a name="PostgresSyncedTableSpecTypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableSpecTypeOverrides: postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.pgType">pgType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#pg_type PostgresSyncedTable#pg_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#size PostgresSyncedTable#size}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}.

---

##### `pgType`<sup>Required</sup> <a name="pgType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.pgType"></a>

```typescript
public readonly pgType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#pg_type PostgresSyncedTable#pg_type}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/postgres_synced_table#size PostgresSyncedTable#size}.

---

### PostgresSyncedTableStatus <a name="PostgresSyncedTableStatus" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableStatus: postgresSyncedTable.PostgresSyncedTableStatus = { ... }
```


### PostgresSyncedTableStatusLastSync <a name="PostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableStatusLastSync: postgresSyncedTable.PostgresSyncedTableStatusLastSync = { ... }
```


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableStatusLastSyncDeltaTableSyncInfo: postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo = { ... }
```


### PostgresSyncedTableStatusOngoingSyncProgress <a name="PostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

const postgresSyncedTableStatusOngoingSyncProgress: postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresSyncedTableProviderConfigOutputReference <a name="PostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSyncedTableProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---


### PostgresSyncedTableSpecExtraColumnsList <a name="PostgresSyncedTableSpecExtraColumnsList" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get"></a>

```typescript
public get(index: number): PostgresSyncedTableSpecExtraColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSyncedTableSpecExtraColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>[]

---


### PostgresSyncedTableSpecExtraColumnsOutputReference <a name="PostgresSyncedTableSpecExtraColumnsOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance">resetMaintenance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompute` <a name="resetCompute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute"></a>

```typescript
public resetCompute(): void
```

##### `resetMaintenance` <a name="resetMaintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance"></a>

```typescript
public resetMaintenance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput">computeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput">maintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType">columnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.compute">compute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance">maintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput"></a>

```typescript
public readonly columnTypeInput: string;
```

- *Type:* string

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput"></a>

```typescript
public readonly computeInput: string;
```

- *Type:* string

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput"></a>

```typescript
public readonly maintenanceInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.compute"></a>

```typescript
public readonly compute: string;
```

- *Type:* string

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance"></a>

```typescript
public readonly maintenance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSyncedTableSpecExtraColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>

---


### PostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="PostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetPipelineChannel">resetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">resetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">resetStorageSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetPipelineChannel` <a name="resetPipelineChannel" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetPipelineChannel"></a>

```typescript
public resetPipelineChannel(): void
```

##### `resetStorageCatalog` <a name="resetStorageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```typescript
public resetStorageCatalog(): void
```

##### `resetStorageSchema` <a name="resetStorageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```typescript
public resetStorageSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannelInput">pipelineChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storageCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storageSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannel">pipelineChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storageCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">storageSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `pipelineChannelInput`<sup>Optional</sup> <a name="pipelineChannelInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannelInput"></a>

```typescript
public readonly pipelineChannelInput: string;
```

- *Type:* string

---

##### `storageCatalogInput`<sup>Optional</sup> <a name="storageCatalogInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```typescript
public readonly storageCatalogInput: string;
```

- *Type:* string

---

##### `storageSchemaInput`<sup>Optional</sup> <a name="storageSchemaInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```typescript
public readonly storageSchemaInput: string;
```

- *Type:* string

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `pipelineChannel`<sup>Required</sup> <a name="pipelineChannel" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannel"></a>

```typescript
public readonly pipelineChannel: string;
```

- *Type:* string

---

##### `storageCatalog`<sup>Required</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```typescript
public readonly storageCatalog: string;
```

- *Type:* string

---

##### `storageSchema`<sup>Required</sup> <a name="storageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```typescript
public readonly storageSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSyncedTableSpecNewPipelineSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---


### PostgresSyncedTableSpecOutputReference <a name="PostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns">putExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec">putNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides">putTypeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetAcceleratedSync">resetAcceleratedSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">resetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId">resetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExtraColumns">resetExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">resetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase">resetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">resetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">resetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName">resetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey">resetTimeseriesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTypeOverrides">resetTypeOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraColumns` <a name="putExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns"></a>

```typescript
public putExtraColumns(value: IResolvable | PostgresSyncedTableSpecExtraColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>[]

---

##### `putNewPipelineSpec` <a name="putNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```typescript
public putNewPipelineSpec(value: PostgresSyncedTableSpecNewPipelineSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `putTypeOverrides` <a name="putTypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides"></a>

```typescript
public putTypeOverrides(value: IResolvable | PostgresSyncedTableSpecTypeOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>[]

---

##### `resetAcceleratedSync` <a name="resetAcceleratedSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetAcceleratedSync"></a>

```typescript
public resetAcceleratedSync(): void
```

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCreateDatabaseObjectsIfMissing` <a name="resetCreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```typescript
public resetCreateDatabaseObjectsIfMissing(): void
```

##### `resetExistingPipelineId` <a name="resetExistingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```typescript
public resetExistingPipelineId(): void
```

##### `resetExtraColumns` <a name="resetExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExtraColumns"></a>

```typescript
public resetExtraColumns(): void
```

##### `resetNewPipelineSpec` <a name="resetNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```typescript
public resetNewPipelineSpec(): void
```

##### `resetPostgresDatabase` <a name="resetPostgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```typescript
public resetPostgresDatabase(): void
```

##### `resetPrimaryKeyColumns` <a name="resetPrimaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```typescript
public resetPrimaryKeyColumns(): void
```

##### `resetSchedulingPolicy` <a name="resetSchedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```typescript
public resetSchedulingPolicy(): void
```

##### `resetSourceTableFullName` <a name="resetSourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```typescript
public resetSourceTableFullName(): void
```

##### `resetTimeseriesKey` <a name="resetTimeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```typescript
public resetTimeseriesKey(): void
```

##### `resetTypeOverrides` <a name="resetTypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTypeOverrides"></a>

```typescript
public resetTypeOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumns">extraColumns</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList">PostgresSyncedTableSpecExtraColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverrides">typeOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList">PostgresSyncedTableSpecTypeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput">acceleratedSyncInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">createDatabaseObjectsIfMissingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">existingPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumnsInput">extraColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">newPipelineSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">postgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">primaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">schedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">sourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">timeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverridesInput">typeOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSync">acceleratedSync</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId">existingPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName">sourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey">timeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraColumns`<sup>Required</sup> <a name="extraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumns"></a>

```typescript
public readonly extraColumns: PostgresSyncedTableSpecExtraColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList">PostgresSyncedTableSpecExtraColumnsList</a>

---

##### `newPipelineSpec`<sup>Required</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```typescript
public readonly newPipelineSpec: PostgresSyncedTableSpecNewPipelineSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `typeOverrides`<sup>Required</sup> <a name="typeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverrides"></a>

```typescript
public readonly typeOverrides: PostgresSyncedTableSpecTypeOverridesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList">PostgresSyncedTableSpecTypeOverridesList</a>

---

##### `acceleratedSyncInput`<sup>Optional</sup> <a name="acceleratedSyncInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput"></a>

```typescript
public readonly acceleratedSyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `createDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissingInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```typescript
public readonly createDatabaseObjectsIfMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `existingPipelineIdInput`<sup>Optional</sup> <a name="existingPipelineIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```typescript
public readonly existingPipelineIdInput: string;
```

- *Type:* string

---

##### `extraColumnsInput`<sup>Optional</sup> <a name="extraColumnsInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumnsInput"></a>

```typescript
public readonly extraColumnsInput: IResolvable | PostgresSyncedTableSpecExtraColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>[]

---

##### `newPipelineSpecInput`<sup>Optional</sup> <a name="newPipelineSpecInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```typescript
public readonly newPipelineSpecInput: IResolvable | PostgresSyncedTableSpecNewPipelineSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `postgresDatabaseInput`<sup>Optional</sup> <a name="postgresDatabaseInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```typescript
public readonly postgresDatabaseInput: string;
```

- *Type:* string

---

##### `primaryKeyColumnsInput`<sup>Optional</sup> <a name="primaryKeyColumnsInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```typescript
public readonly primaryKeyColumnsInput: string[];
```

- *Type:* string[]

---

##### `schedulingPolicyInput`<sup>Optional</sup> <a name="schedulingPolicyInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```typescript
public readonly schedulingPolicyInput: string;
```

- *Type:* string

---

##### `sourceTableFullNameInput`<sup>Optional</sup> <a name="sourceTableFullNameInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```typescript
public readonly sourceTableFullNameInput: string;
```

- *Type:* string

---

##### `timeseriesKeyInput`<sup>Optional</sup> <a name="timeseriesKeyInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```typescript
public readonly timeseriesKeyInput: string;
```

- *Type:* string

---

##### `typeOverridesInput`<sup>Optional</sup> <a name="typeOverridesInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverridesInput"></a>

```typescript
public readonly typeOverridesInput: IResolvable | PostgresSyncedTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>[]

---

##### `acceleratedSync`<sup>Required</sup> <a name="acceleratedSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSync"></a>

```typescript
public readonly acceleratedSync: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `createDatabaseObjectsIfMissing`<sup>Required</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```typescript
public readonly createDatabaseObjectsIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `existingPipelineId`<sup>Required</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```typescript
public readonly existingPipelineId: string;
```

- *Type:* string

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

---

##### `primaryKeyColumns`<sup>Required</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```typescript
public readonly primaryKeyColumns: string[];
```

- *Type:* string[]

---

##### `schedulingPolicy`<sup>Required</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

---

##### `sourceTableFullName`<sup>Required</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```typescript
public readonly sourceTableFullName: string;
```

- *Type:* string

---

##### `timeseriesKey`<sup>Required</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```typescript
public readonly timeseriesKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSyncedTableSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---


### PostgresSyncedTableSpecTypeOverridesList <a name="PostgresSyncedTableSpecTypeOverridesList" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get"></a>

```typescript
public get(index: number): PostgresSyncedTableSpecTypeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSyncedTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>[]

---


### PostgresSyncedTableSpecTypeOverridesOutputReference <a name="PostgresSyncedTableSpecTypeOverridesOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput">pgTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType">pgType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `pgTypeInput`<sup>Optional</sup> <a name="pgTypeInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput"></a>

```typescript
public readonly pgTypeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `pgType`<sup>Required</sup> <a name="pgType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType"></a>

```typescript
public readonly pgType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSyncedTableSpecTypeOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>

---


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">deltaCommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">deltaCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaCommitTime`<sup>Required</sup> <a name="deltaCommitTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```typescript
public readonly deltaCommitTime: string;
```

- *Type:* string

---

##### `deltaCommitVersion`<sup>Required</sup> <a name="deltaCommitVersion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```typescript
public readonly deltaCommitVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### PostgresSyncedTableStatusLastSyncOutputReference <a name="PostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">deltaTableSyncInfo</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">syncEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">syncStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSyncInfo`<sup>Required</sup> <a name="deltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```typescript
public readonly deltaTableSyncInfo: PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `syncEndTime`<sup>Required</sup> <a name="syncEndTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```typescript
public readonly syncEndTime: string;
```

- *Type:* string

---

##### `syncStartTime`<sup>Required</sup> <a name="syncStartTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```typescript
public readonly syncStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresSyncedTableStatusLastSync;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a>

---


### PostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="PostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```typescript
public readonly estimatedCompletionTimeSeconds: number;
```

- *Type:* number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```typescript
public readonly latestVersionCurrentlyProcessing: number;
```

- *Type:* number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```typescript
public readonly syncedRowCount: number;
```

- *Type:* number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```typescript
public readonly syncProgressCompletion: number;
```

- *Type:* number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```typescript
public readonly totalRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresSyncedTableStatusOngoingSyncProgress;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a>

---


### PostgresSyncedTableStatusOutputReference <a name="PostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer"></a>

```typescript
import { postgresSyncedTable } from '@cdktn/provider-databricks'

new postgresSyncedTable.PostgresSyncedTableStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState">detailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync">lastSync</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime">lastSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">ongoingSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase">provisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">unityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detailedState`<sup>Required</sup> <a name="detailedState" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```typescript
public readonly detailedState: string;
```

- *Type:* string

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```typescript
public readonly lastProcessedCommitVersion: number;
```

- *Type:* number

---

##### `lastSync`<sup>Required</sup> <a name="lastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```typescript
public readonly lastSync: PostgresSyncedTableStatusLastSyncOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `lastSyncTime`<sup>Required</sup> <a name="lastSyncTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```typescript
public readonly lastSyncTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `ongoingSyncProgress`<sup>Required</sup> <a name="ongoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```typescript
public readonly ongoingSyncProgress: PostgresSyncedTableStatusOngoingSyncProgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `provisioningPhase`<sup>Required</sup> <a name="provisioningPhase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```typescript
public readonly provisioningPhase: string;
```

- *Type:* string

---

##### `unityCatalogProvisioningState`<sup>Required</sup> <a name="unityCatalogProvisioningState" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```typescript
public readonly unityCatalogProvisioningState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresSyncedTableStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a>

---



