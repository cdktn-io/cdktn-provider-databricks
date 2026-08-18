# `databaseSyncedDatabaseTable` Submodule <a name="`databaseSyncedDatabaseTable` Submodule" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSyncedDatabaseTable <a name="DatabaseSyncedDatabaseTable" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table databricks_database_synced_database_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable(scope: Construct, id: string, config: DatabaseSyncedDatabaseTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig">DatabaseSyncedDatabaseTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig">DatabaseSyncedDatabaseTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetDatabaseInstanceName">resetDatabaseInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetLogicalDatabaseName">resetLogicalDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DatabaseSyncedDatabaseTableProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig">DatabaseSyncedDatabaseTableProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec"></a>

```typescript
public putSpec(value: DatabaseSyncedDatabaseTableSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

---

##### `resetDatabaseInstanceName` <a name="resetDatabaseInstanceName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetDatabaseInstanceName"></a>

```typescript
public resetDatabaseInstanceName(): void
```

##### `resetLogicalDatabaseName` <a name="resetLogicalDatabaseName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetLogicalDatabaseName"></a>

```typescript
public resetLogicalDatabaseName(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatabaseSyncedDatabaseTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatabaseSyncedDatabaseTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseSyncedDatabaseTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseSyncedDatabaseTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabaseSyncedDatabaseTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dataSynchronizationStatus">dataSynchronizationStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName">effectiveDatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName">effectiveLogicalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference">DatabaseSyncedDatabaseTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference">DatabaseSyncedDatabaseTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState">unityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceNameInput">databaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput">logicalDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig">DatabaseSyncedDatabaseTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.specInput">specInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceName">databaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseName">logicalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSynchronizationStatus`<sup>Required</sup> <a name="dataSynchronizationStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dataSynchronizationStatus"></a>

```typescript
public readonly dataSynchronizationStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a>

---

##### `effectiveDatabaseInstanceName`<sup>Required</sup> <a name="effectiveDatabaseInstanceName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName"></a>

```typescript
public readonly effectiveDatabaseInstanceName: string;
```

- *Type:* string

---

##### `effectiveLogicalDatabaseName`<sup>Required</sup> <a name="effectiveLogicalDatabaseName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName"></a>

```typescript
public readonly effectiveLogicalDatabaseName: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.providerConfig"></a>

```typescript
public readonly providerConfig: DatabaseSyncedDatabaseTableProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference">DatabaseSyncedDatabaseTableProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.spec"></a>

```typescript
public readonly spec: DatabaseSyncedDatabaseTableSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference">DatabaseSyncedDatabaseTableSpecOutputReference</a>

---

##### `unityCatalogProvisioningState`<sup>Required</sup> <a name="unityCatalogProvisioningState" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState"></a>

```typescript
public readonly unityCatalogProvisioningState: string;
```

- *Type:* string

---

##### `databaseInstanceNameInput`<sup>Optional</sup> <a name="databaseInstanceNameInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceNameInput"></a>

```typescript
public readonly databaseInstanceNameInput: string;
```

- *Type:* string

---

##### `logicalDatabaseNameInput`<sup>Optional</sup> <a name="logicalDatabaseNameInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput"></a>

```typescript
public readonly logicalDatabaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DatabaseSyncedDatabaseTableProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig">DatabaseSyncedDatabaseTableProviderConfig</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | DatabaseSyncedDatabaseTableSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

---

##### `databaseInstanceName`<sup>Required</sup> <a name="databaseInstanceName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceName"></a>

```typescript
public readonly databaseInstanceName: string;
```

- *Type:* string

---

##### `logicalDatabaseName`<sup>Required</sup> <a name="logicalDatabaseName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseName"></a>

```typescript
public readonly logicalDatabaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSyncedDatabaseTableConfig <a name="DatabaseSyncedDatabaseTableConfig" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableConfig: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.databaseInstanceName">databaseInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName">logicalDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig">DatabaseSyncedDatabaseTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#provider_config DatabaseSyncedDatabaseTable#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}.

---

##### `databaseInstanceName`<sup>Optional</sup> <a name="databaseInstanceName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.databaseInstanceName"></a>

```typescript
public readonly databaseInstanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}.

---

##### `logicalDatabaseName`<sup>Optional</sup> <a name="logicalDatabaseName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName"></a>

```typescript
public readonly logicalDatabaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DatabaseSyncedDatabaseTableProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig">DatabaseSyncedDatabaseTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#provider_config DatabaseSyncedDatabaseTable#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.spec"></a>

```typescript
public readonly spec: DatabaseSyncedDatabaseTableSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}.

---

### DatabaseSyncedDatabaseTableDataSynchronizationStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatus: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus">continuousUpdateStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#continuous_update_status DatabaseSyncedDatabaseTable#continuous_update_status}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus">failedStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#failed_status DatabaseSyncedDatabaseTable#failed_status}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus">provisioningStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#provisioning_status DatabaseSyncedDatabaseTable#provisioning_status}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus">triggeredUpdateStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#triggered_update_status DatabaseSyncedDatabaseTable#triggered_update_status}. |

---

##### `continuousUpdateStatus`<sup>Optional</sup> <a name="continuousUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus"></a>

```typescript
public readonly continuousUpdateStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#continuous_update_status DatabaseSyncedDatabaseTable#continuous_update_status}.

---

##### `failedStatus`<sup>Optional</sup> <a name="failedStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus"></a>

```typescript
public readonly failedStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#failed_status DatabaseSyncedDatabaseTable#failed_status}.

---

##### `provisioningStatus`<sup>Optional</sup> <a name="provisioningStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus"></a>

```typescript
public readonly provisioningStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#provisioning_status DatabaseSyncedDatabaseTable#provisioning_status}.

---

##### `triggeredUpdateStatus`<sup>Optional</sup> <a name="triggeredUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus"></a>

```typescript
public readonly triggeredUpdateStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#triggered_update_status DatabaseSyncedDatabaseTable#triggered_update_status}.

---

### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus = { ... }
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress = { ... }
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus = { ... }
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusLastSync: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync = { ... }
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo = { ... }
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus = { ... }
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress = { ... }
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus = { ... }
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress = { ... }
```


### DatabaseSyncedDatabaseTableProviderConfig <a name="DatabaseSyncedDatabaseTableProviderConfig" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableProviderConfig: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#workspace_id DatabaseSyncedDatabaseTable#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#workspace_id DatabaseSyncedDatabaseTable#workspace_id}.

---

### DatabaseSyncedDatabaseTableSpec <a name="DatabaseSyncedDatabaseTableSpec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableSpec: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.acceleratedSync">acceleratedSync</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#accelerated_sync DatabaseSyncedDatabaseTable#accelerated_sync}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#create_database_objects_if_missing DatabaseSyncedDatabaseTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.existingPipelineId">existingPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#existing_pipeline_id DatabaseSyncedDatabaseTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#new_pipeline_spec DatabaseSyncedDatabaseTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#primary_key_columns DatabaseSyncedDatabaseTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#scheduling_policy DatabaseSyncedDatabaseTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.sourceTableFullName">sourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#source_table_full_name DatabaseSyncedDatabaseTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.timeseriesKey">timeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#timeseries_key DatabaseSyncedDatabaseTable#timeseries_key}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.typeOverrides">typeOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#type_overrides DatabaseSyncedDatabaseTable#type_overrides}. |

---

##### `acceleratedSync`<sup>Optional</sup> <a name="acceleratedSync" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.acceleratedSync"></a>

```typescript
public readonly acceleratedSync: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#accelerated_sync DatabaseSyncedDatabaseTable#accelerated_sync}.

---

##### `createDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing"></a>

```typescript
public readonly createDatabaseObjectsIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#create_database_objects_if_missing DatabaseSyncedDatabaseTable#create_database_objects_if_missing}.

---

##### `existingPipelineId`<sup>Optional</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.existingPipelineId"></a>

```typescript
public readonly existingPipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#existing_pipeline_id DatabaseSyncedDatabaseTable#existing_pipeline_id}.

---

##### `newPipelineSpec`<sup>Optional</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.newPipelineSpec"></a>

```typescript
public readonly newPipelineSpec: DatabaseSyncedDatabaseTableSpecNewPipelineSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#new_pipeline_spec DatabaseSyncedDatabaseTable#new_pipeline_spec}.

---

##### `primaryKeyColumns`<sup>Optional</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns"></a>

```typescript
public readonly primaryKeyColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#primary_key_columns DatabaseSyncedDatabaseTable#primary_key_columns}.

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#scheduling_policy DatabaseSyncedDatabaseTable#scheduling_policy}.

---

##### `sourceTableFullName`<sup>Optional</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.sourceTableFullName"></a>

```typescript
public readonly sourceTableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#source_table_full_name DatabaseSyncedDatabaseTable#source_table_full_name}.

---

##### `timeseriesKey`<sup>Optional</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.timeseriesKey"></a>

```typescript
public readonly timeseriesKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#timeseries_key DatabaseSyncedDatabaseTable#timeseries_key}.

---

##### `typeOverrides`<sup>Optional</sup> <a name="typeOverrides" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.typeOverrides"></a>

```typescript
public readonly typeOverrides: IResolvable | DatabaseSyncedDatabaseTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#type_overrides DatabaseSyncedDatabaseTable#type_overrides}.

---

### DatabaseSyncedDatabaseTableSpecNewPipelineSpec <a name="DatabaseSyncedDatabaseTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableSpecNewPipelineSpec: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#budget_policy_id DatabaseSyncedDatabaseTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog">storageCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#storage_catalog DatabaseSyncedDatabaseTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema">storageSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#storage_schema DatabaseSyncedDatabaseTable#storage_schema}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#budget_policy_id DatabaseSyncedDatabaseTable#budget_policy_id}.

---

##### `storageCatalog`<sup>Optional</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog"></a>

```typescript
public readonly storageCatalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#storage_catalog DatabaseSyncedDatabaseTable#storage_catalog}.

---

##### `storageSchema`<sup>Optional</sup> <a name="storageSchema" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema"></a>

```typescript
public readonly storageSchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#storage_schema DatabaseSyncedDatabaseTable#storage_schema}.

---

### DatabaseSyncedDatabaseTableSpecTypeOverrides <a name="DatabaseSyncedDatabaseTableSpecTypeOverrides" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

const databaseSyncedDatabaseTableSpecTypeOverrides: databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#column_name DatabaseSyncedDatabaseTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides.property.pgType">pgType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#pg_type DatabaseSyncedDatabaseTable#pg_type}. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#size DatabaseSyncedDatabaseTable#size}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#column_name DatabaseSyncedDatabaseTable#column_name}.

---

##### `pgType`<sup>Required</sup> <a name="pgType" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides.property.pgType"></a>

```typescript
public readonly pgType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#pg_type DatabaseSyncedDatabaseTable#pg_type}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/database_synced_database_table#size DatabaseSyncedDatabaseTable#size}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">provisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```typescript
public readonly estimatedCompletionTimeSeconds: number;
```

- *Type:* number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```typescript
public readonly latestVersionCurrentlyProcessing: number;
```

- *Type:* number

---

##### `provisioningPhase`<sup>Required</sup> <a name="provisioningPhase" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```typescript
public readonly provisioningPhase: string;
```

- *Type:* string

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```typescript
public readonly syncedRowCount: number;
```

- *Type:* number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```typescript
public readonly syncProgressCompletion: number;
```

- *Type:* number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```typescript
public readonly totalRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">initialPipelineSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialPipelineSyncProgress`<sup>Required</sup> <a name="initialPipelineSyncProgress" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```typescript
public readonly initialPipelineSyncProgress: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```typescript
public readonly lastProcessedCommitVersion: number;
```

- *Type:* number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```typescript
public readonly lastProcessedCommitVersion: number;
```

- *Type:* number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp">deltaCommitTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">deltaCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaCommitTimestamp`<sup>Required</sup> <a name="deltaCommitTimestamp" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp"></a>

```typescript
public readonly deltaCommitTimestamp: string;
```

- *Type:* string

---

##### `deltaCommitVersion`<sup>Required</sup> <a name="deltaCommitVersion" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```typescript
public readonly deltaCommitVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo">deltaTableSyncInfo</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp">syncEndTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp">syncStartTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSyncInfo`<sup>Required</sup> <a name="deltaTableSyncInfo" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```typescript
public readonly deltaTableSyncInfo: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `syncEndTimestamp`<sup>Required</sup> <a name="syncEndTimestamp" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp"></a>

```typescript
public readonly syncEndTimestamp: string;
```

- *Type:* string

---

##### `syncStartTimestamp`<sup>Required</sup> <a name="syncStartTimestamp" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp"></a>

```typescript
public readonly syncStartTimestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus">putContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus">putFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus">putProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus">putTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus">resetContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus">resetFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus">resetProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus">resetTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContinuousUpdateStatus` <a name="putContinuousUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus"></a>

```typescript
public putContinuousUpdateStatus(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `putFailedStatus` <a name="putFailedStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus"></a>

```typescript
public putFailedStatus(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---

##### `putProvisioningStatus` <a name="putProvisioningStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus"></a>

```typescript
public putProvisioningStatus(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---

##### `putTriggeredUpdateStatus` <a name="putTriggeredUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus"></a>

```typescript
public putTriggeredUpdateStatus(value: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `resetContinuousUpdateStatus` <a name="resetContinuousUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus"></a>

```typescript
public resetContinuousUpdateStatus(): void
```

##### `resetFailedStatus` <a name="resetFailedStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus"></a>

```typescript
public resetFailedStatus(): void
```

##### `resetProvisioningStatus` <a name="resetProvisioningStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus"></a>

```typescript
public resetProvisioningStatus(): void
```

##### `resetTriggeredUpdateStatus` <a name="resetTriggeredUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus"></a>

```typescript
public resetTriggeredUpdateStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus">continuousUpdateStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState">detailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus">failedStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync">lastSync</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus">provisioningStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus">triggeredUpdateStatus</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput">continuousUpdateStatusInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput">failedStatusInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput">provisioningStatusInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput">triggeredUpdateStatusInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuousUpdateStatus`<sup>Required</sup> <a name="continuousUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus"></a>

```typescript
public readonly continuousUpdateStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a>

---

##### `detailedState`<sup>Required</sup> <a name="detailedState" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState"></a>

```typescript
public readonly detailedState: string;
```

- *Type:* string

---

##### `failedStatus`<sup>Required</sup> <a name="failedStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus"></a>

```typescript
public readonly failedStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a>

---

##### `lastSync`<sup>Required</sup> <a name="lastSync" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync"></a>

```typescript
public readonly lastSync: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `provisioningStatus`<sup>Required</sup> <a name="provisioningStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus"></a>

```typescript
public readonly provisioningStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a>

---

##### `triggeredUpdateStatus`<sup>Required</sup> <a name="triggeredUpdateStatus" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus"></a>

```typescript
public readonly triggeredUpdateStatus: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a>

---

##### `continuousUpdateStatusInput`<sup>Optional</sup> <a name="continuousUpdateStatusInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput"></a>

```typescript
public readonly continuousUpdateStatusInput: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `failedStatusInput`<sup>Optional</sup> <a name="failedStatusInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput"></a>

```typescript
public readonly failedStatusInput: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---

##### `provisioningStatusInput`<sup>Optional</sup> <a name="provisioningStatusInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput"></a>

```typescript
public readonly provisioningStatusInput: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---

##### `triggeredUpdateStatusInput`<sup>Optional</sup> <a name="triggeredUpdateStatusInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput"></a>

```typescript
public readonly triggeredUpdateStatusInput: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSyncedDatabaseTableDataSynchronizationStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">provisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```typescript
public readonly estimatedCompletionTimeSeconds: number;
```

- *Type:* number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```typescript
public readonly latestVersionCurrentlyProcessing: number;
```

- *Type:* number

---

##### `provisioningPhase`<sup>Required</sup> <a name="provisioningPhase" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```typescript
public readonly provisioningPhase: string;
```

- *Type:* string

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```typescript
public readonly syncedRowCount: number;
```

- *Type:* number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```typescript
public readonly syncProgressCompletion: number;
```

- *Type:* number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```typescript
public readonly totalRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">initialPipelineSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialPipelineSyncProgress`<sup>Required</sup> <a name="initialPipelineSyncProgress" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```typescript
public readonly initialPipelineSyncProgress: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">triggeredUpdateProgress</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```typescript
public readonly lastProcessedCommitVersion: number;
```

- *Type:* number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `triggeredUpdateProgress`<sup>Required</sup> <a name="triggeredUpdateProgress" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```typescript
public readonly triggeredUpdateProgress: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase">provisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```typescript
public readonly estimatedCompletionTimeSeconds: number;
```

- *Type:* number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```typescript
public readonly latestVersionCurrentlyProcessing: number;
```

- *Type:* number

---

##### `provisioningPhase`<sup>Required</sup> <a name="provisioningPhase" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase"></a>

```typescript
public readonly provisioningPhase: string;
```

- *Type:* string

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```typescript
public readonly syncedRowCount: number;
```

- *Type:* number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```typescript
public readonly syncProgressCompletion: number;
```

- *Type:* number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```typescript
public readonly totalRowCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### DatabaseSyncedDatabaseTableProviderConfigOutputReference <a name="DatabaseSyncedDatabaseTableProviderConfigOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig">DatabaseSyncedDatabaseTableProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableProviderConfig">DatabaseSyncedDatabaseTableProviderConfig</a>

---


### DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference <a name="DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">resetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema">resetStorageSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetStorageCatalog` <a name="resetStorageCatalog" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```typescript
public resetStorageCatalog(): void
```

##### `resetStorageSchema` <a name="resetStorageSchema" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```typescript
public resetStorageSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storageCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storageSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storageCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema">storageSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `storageCatalogInput`<sup>Optional</sup> <a name="storageCatalogInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```typescript
public readonly storageCatalogInput: string;
```

- *Type:* string

---

##### `storageSchemaInput`<sup>Optional</sup> <a name="storageSchemaInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```typescript
public readonly storageSchemaInput: string;
```

- *Type:* string

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `storageCatalog`<sup>Required</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```typescript
public readonly storageCatalog: string;
```

- *Type:* string

---

##### `storageSchema`<sup>Required</sup> <a name="storageSchema" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```typescript
public readonly storageSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableSpecNewPipelineSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---


### DatabaseSyncedDatabaseTableSpecOutputReference <a name="DatabaseSyncedDatabaseTableSpecOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec">putNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putTypeOverrides">putTypeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetAcceleratedSync">resetAcceleratedSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">resetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId">resetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec">resetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns">resetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy">resetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName">resetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey">resetTimeseriesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetTypeOverrides">resetTypeOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNewPipelineSpec` <a name="putNewPipelineSpec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec"></a>

```typescript
public putNewPipelineSpec(value: DatabaseSyncedDatabaseTableSpecNewPipelineSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---

##### `putTypeOverrides` <a name="putTypeOverrides" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putTypeOverrides"></a>

```typescript
public putTypeOverrides(value: IResolvable | DatabaseSyncedDatabaseTableSpecTypeOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putTypeOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a>[]

---

##### `resetAcceleratedSync` <a name="resetAcceleratedSync" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetAcceleratedSync"></a>

```typescript
public resetAcceleratedSync(): void
```

##### `resetCreateDatabaseObjectsIfMissing` <a name="resetCreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```typescript
public resetCreateDatabaseObjectsIfMissing(): void
```

##### `resetExistingPipelineId` <a name="resetExistingPipelineId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId"></a>

```typescript
public resetExistingPipelineId(): void
```

##### `resetNewPipelineSpec` <a name="resetNewPipelineSpec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec"></a>

```typescript
public resetNewPipelineSpec(): void
```

##### `resetPrimaryKeyColumns` <a name="resetPrimaryKeyColumns" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```typescript
public resetPrimaryKeyColumns(): void
```

##### `resetSchedulingPolicy` <a name="resetSchedulingPolicy" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy"></a>

```typescript
public resetSchedulingPolicy(): void
```

##### `resetSourceTableFullName` <a name="resetSourceTableFullName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName"></a>

```typescript
public resetSourceTableFullName(): void
```

##### `resetTimeseriesKey` <a name="resetTimeseriesKey" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey"></a>

```typescript
public resetTimeseriesKey(): void
```

##### `resetTypeOverrides` <a name="resetTypeOverrides" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetTypeOverrides"></a>

```typescript
public resetTypeOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.typeOverrides">typeOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList">DatabaseSyncedDatabaseTableSpecTypeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.acceleratedSyncInput">acceleratedSyncInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">createDatabaseObjectsIfMissingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput">existingPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput">newPipelineSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput">primaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput">schedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput">sourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput">timeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.typeOverridesInput">typeOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.acceleratedSync">acceleratedSync</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId">existingPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName">sourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey">timeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newPipelineSpec`<sup>Required</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec"></a>

```typescript
public readonly newPipelineSpec: DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a>

---

##### `typeOverrides`<sup>Required</sup> <a name="typeOverrides" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.typeOverrides"></a>

```typescript
public readonly typeOverrides: DatabaseSyncedDatabaseTableSpecTypeOverridesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList">DatabaseSyncedDatabaseTableSpecTypeOverridesList</a>

---

##### `acceleratedSyncInput`<sup>Optional</sup> <a name="acceleratedSyncInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.acceleratedSyncInput"></a>

```typescript
public readonly acceleratedSyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissingInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```typescript
public readonly createDatabaseObjectsIfMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `existingPipelineIdInput`<sup>Optional</sup> <a name="existingPipelineIdInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput"></a>

```typescript
public readonly existingPipelineIdInput: string;
```

- *Type:* string

---

##### `newPipelineSpecInput`<sup>Optional</sup> <a name="newPipelineSpecInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput"></a>

```typescript
public readonly newPipelineSpecInput: IResolvable | DatabaseSyncedDatabaseTableSpecNewPipelineSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---

##### `primaryKeyColumnsInput`<sup>Optional</sup> <a name="primaryKeyColumnsInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```typescript
public readonly primaryKeyColumnsInput: string[];
```

- *Type:* string[]

---

##### `schedulingPolicyInput`<sup>Optional</sup> <a name="schedulingPolicyInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput"></a>

```typescript
public readonly schedulingPolicyInput: string;
```

- *Type:* string

---

##### `sourceTableFullNameInput`<sup>Optional</sup> <a name="sourceTableFullNameInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```typescript
public readonly sourceTableFullNameInput: string;
```

- *Type:* string

---

##### `timeseriesKeyInput`<sup>Optional</sup> <a name="timeseriesKeyInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput"></a>

```typescript
public readonly timeseriesKeyInput: string;
```

- *Type:* string

---

##### `typeOverridesInput`<sup>Optional</sup> <a name="typeOverridesInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.typeOverridesInput"></a>

```typescript
public readonly typeOverridesInput: IResolvable | DatabaseSyncedDatabaseTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a>[]

---

##### `acceleratedSync`<sup>Required</sup> <a name="acceleratedSync" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.acceleratedSync"></a>

```typescript
public readonly acceleratedSync: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createDatabaseObjectsIfMissing`<sup>Required</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```typescript
public readonly createDatabaseObjectsIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `existingPipelineId`<sup>Required</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId"></a>

```typescript
public readonly existingPipelineId: string;
```

- *Type:* string

---

##### `primaryKeyColumns`<sup>Required</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns"></a>

```typescript
public readonly primaryKeyColumns: string[];
```

- *Type:* string[]

---

##### `schedulingPolicy`<sup>Required</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

---

##### `sourceTableFullName`<sup>Required</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName"></a>

```typescript
public readonly sourceTableFullName: string;
```

- *Type:* string

---

##### `timeseriesKey`<sup>Required</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey"></a>

```typescript
public readonly timeseriesKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

---


### DatabaseSyncedDatabaseTableSpecTypeOverridesList <a name="DatabaseSyncedDatabaseTableSpecTypeOverridesList" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.get"></a>

```typescript
public get(index: number): DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableSpecTypeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a>[]

---


### DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference <a name="DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer"></a>

```typescript
import { databaseSyncedDatabaseTable } from '@cdktn/provider-databricks'

new databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.pgTypeInput">pgTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.pgType">pgType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `pgTypeInput`<sup>Optional</sup> <a name="pgTypeInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.pgTypeInput"></a>

```typescript
public readonly pgTypeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `pgType`<sup>Required</sup> <a name="pgType" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.pgType"></a>

```typescript
public readonly pgType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseSyncedDatabaseTableSpecTypeOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecTypeOverrides">DatabaseSyncedDatabaseTableSpecTypeOverrides</a>

---



