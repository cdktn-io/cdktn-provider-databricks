# `postgresSnapshotSchedule` Submodule <a name="`postgresSnapshotSchedule` Submodule" id="@cdktn/provider-databricks.postgresSnapshotSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSnapshotSchedule <a name="PostgresSnapshotSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

new postgresSnapshotSchedule.PostgresSnapshotSchedule(scope: Construct, id: string, config?: PostgresSnapshotScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig">PostgresSnapshotScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig">PostgresSnapshotScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig"></a>

```typescript
public putProviderConfig(value: PostgresSnapshotScheduleProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule"></a>

```typescript
public putSchedule(value: IResolvable | PostgresSnapshotScheduleSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>[]

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresSnapshotSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresSnapshotSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSnapshotSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference">PostgresSnapshotScheduleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList">PostgresSnapshotScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresSnapshotScheduleProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference">PostgresSnapshotScheduleProviderConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.schedule"></a>

```typescript
public readonly schedule: PostgresSnapshotScheduleScheduleList;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList">PostgresSnapshotScheduleScheduleList</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | PostgresSnapshotScheduleProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | PostgresSnapshotScheduleSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSnapshotScheduleConfig <a name="PostgresSnapshotScheduleConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

const postgresSnapshotScheduleConfig: postgresSnapshotSchedule.PostgresSnapshotScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.schedule">schedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresSnapshotScheduleProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.schedule"></a>

```typescript
public readonly schedule: IResolvable | PostgresSnapshotScheduleSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}.

---

### PostgresSnapshotScheduleProviderConfig <a name="PostgresSnapshotScheduleProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

const postgresSnapshotScheduleProviderConfig: postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}.

---

### PostgresSnapshotScheduleSchedule <a name="PostgresSnapshotScheduleSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

const postgresSnapshotScheduleSchedule: postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.retention">retention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#retention PostgresSnapshotSchedule#retention}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#daily_schedule PostgresSnapshotSchedule#daily_schedule}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#monthly_schedule PostgresSnapshotSchedule#monthly_schedule}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#weekly_schedule PostgresSnapshotSchedule#weekly_schedule}. |

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#retention PostgresSnapshotSchedule#retention}.

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: PostgresSnapshotScheduleScheduleDailySchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#daily_schedule PostgresSnapshotSchedule#daily_schedule}.

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: PostgresSnapshotScheduleScheduleMonthlySchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#monthly_schedule PostgresSnapshotSchedule#monthly_schedule}.

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: PostgresSnapshotScheduleScheduleWeeklySchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#weekly_schedule PostgresSnapshotSchedule#weekly_schedule}.

---

### PostgresSnapshotScheduleScheduleDailySchedule <a name="PostgresSnapshotScheduleScheduleDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

const postgresSnapshotScheduleScheduleDailySchedule: postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.property.hour">hour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

### PostgresSnapshotScheduleScheduleMonthlySchedule <a name="PostgresSnapshotScheduleScheduleMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

const postgresSnapshotScheduleScheduleMonthlySchedule: postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.day">day</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.hour">hour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

### PostgresSnapshotScheduleScheduleWeeklySchedule <a name="PostgresSnapshotScheduleScheduleWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

const postgresSnapshotScheduleScheduleWeeklySchedule: postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.hour">hour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresSnapshotScheduleProviderConfigOutputReference <a name="PostgresSnapshotScheduleProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

new postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSnapshotScheduleProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---


### PostgresSnapshotScheduleScheduleDailyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleDailyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

new postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSnapshotScheduleScheduleDailySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---


### PostgresSnapshotScheduleScheduleList <a name="PostgresSnapshotScheduleScheduleList" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

new postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get"></a>

```typescript
public get(index: number): PostgresSnapshotScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSnapshotScheduleSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>[]

---


### PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

new postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSnapshotScheduleScheduleMonthlySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---


### PostgresSnapshotScheduleScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

new postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule">putMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule"></a>

```typescript
public putDailySchedule(value: PostgresSnapshotScheduleScheduleDailySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `putMonthlySchedule` <a name="putMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule"></a>

```typescript
public putMonthlySchedule(value: PostgresSnapshotScheduleScheduleMonthlySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule"></a>

```typescript
public putWeeklySchedule(value: PostgresSnapshotScheduleScheduleWeeklySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule"></a>

```typescript
public resetDailySchedule(): void
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule"></a>

```typescript
public resetMonthlySchedule(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference">PostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retentionInput">retentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retention">retention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: PostgresSnapshotScheduleScheduleDailyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference">PostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a>

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput"></a>

```typescript
public readonly dailyScheduleInput: IResolvable | PostgresSnapshotScheduleScheduleDailySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput"></a>

```typescript
public readonly monthlyScheduleInput: IResolvable | PostgresSnapshotScheduleScheduleMonthlySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retentionInput"></a>

```typescript
public readonly retentionInput: string;
```

- *Type:* string

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: IResolvable | PostgresSnapshotScheduleScheduleWeeklySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retention"></a>

```typescript
public readonly retention: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSnapshotScheduleSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>

---


### PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer"></a>

```typescript
import { postgresSnapshotSchedule } from '@cdktn/provider-databricks'

new postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresSnapshotScheduleScheduleWeeklySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---



