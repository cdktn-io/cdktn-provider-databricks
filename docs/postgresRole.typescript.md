# `postgresRole` Submodule <a name="`postgresRole` Submodule" id="@cdktn/provider-databricks.postgresRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresRole <a name="PostgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRole"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role databricks_postgres_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

new postgresRole.PostgresRole(scope: Construct, id: string, config: PostgresRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig">PostgresRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig">PostgresRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.resetRoleId">resetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresRole.PostgresRole.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresRole.PostgresRole.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresRole.PostgresRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresRole.PostgresRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresRole.PostgresRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresRole.PostgresRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresRole.PostgresRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresRole.PostgresRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRole.putProviderConfig"></a>

```typescript
public putProviderConfig(value: PostgresRoleProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRole.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.postgresRole.PostgresRole.putSpec"></a>

```typescript
public putSpec(value: PostgresRoleSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRole.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRole.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetRoleId` <a name="resetRoleId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.resetRoleId"></a>

```typescript
public resetRoleId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.postgresRole.PostgresRole.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isConstruct"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

postgresRole.PostgresRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformElement"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

postgresRole.PostgresRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformResource"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

postgresRole.PostgresRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

postgresRole.PostgresRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PostgresRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference">PostgresRoleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference">PostgresRoleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference">PostgresRoleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.specInput">specInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresRoleProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference">PostgresRoleProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.spec"></a>

```typescript
public readonly spec: PostgresRoleSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference">PostgresRoleSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.status"></a>

```typescript
public readonly status: PostgresRoleStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference">PostgresRoleStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | PostgresRoleProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | PostgresRoleSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresRoleConfig <a name="PostgresRoleConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

const postgresRoleConfig: postgresRole.PostgresRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#parent PostgresRole#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#provider_config PostgresRole#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.roleId">roleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#role_id PostgresRole#role_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#spec PostgresRole#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#parent PostgresRole#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresRoleProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#provider_config PostgresRole#provider_config}.

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#role_id PostgresRole#role_id}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.spec"></a>

```typescript
public readonly spec: PostgresRoleSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#spec PostgresRole#spec}.

---

### PostgresRoleProviderConfig <a name="PostgresRoleProviderConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

const postgresRoleProviderConfig: postgresRole.PostgresRoleProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#workspace_id PostgresRole#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#workspace_id PostgresRole#workspace_id}.

---

### PostgresRoleSpec <a name="PostgresRoleSpec" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

const postgresRoleSpec: postgresRole.PostgresRoleSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#attributes PostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.authMethod">authMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#auth_method PostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.identityType">identityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#identity_type PostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#membership_roles PostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.postgresRole">postgresRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#postgres_role PostgresRole#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.attributes"></a>

```typescript
public readonly attributes: PostgresRoleSpecAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#attributes PostgresRole#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#auth_method PostgresRole#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#identity_type PostgresRole#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#membership_roles PostgresRole#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#postgres_role PostgresRole#postgres_role}.

---

### PostgresRoleSpecAttributes <a name="PostgresRoleSpecAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

const postgresRoleSpecAttributes: postgresRole.PostgresRoleSpecAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#bypassrls PostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#createdb PostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#createrole PostgresRole#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#bypassrls PostgresRole#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#createdb PostgresRole#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#createrole PostgresRole#createrole}.

---

### PostgresRoleStatus <a name="PostgresRoleStatus" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

const postgresRoleStatus: postgresRole.PostgresRoleStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#attributes PostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.authMethod">authMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#auth_method PostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.identityType">identityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#identity_type PostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#membership_roles PostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.postgresRole">postgresRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#postgres_role PostgresRole#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.attributes"></a>

```typescript
public readonly attributes: PostgresRoleStatusAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#attributes PostgresRole#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#auth_method PostgresRole#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#identity_type PostgresRole#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#membership_roles PostgresRole#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#postgres_role PostgresRole#postgres_role}.

---

### PostgresRoleStatusAttributes <a name="PostgresRoleStatusAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

const postgresRoleStatusAttributes: postgresRole.PostgresRoleStatusAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#bypassrls PostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#createdb PostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#createrole PostgresRole#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#bypassrls PostgresRole#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#createdb PostgresRole#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_role#createrole PostgresRole#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresRoleProviderConfigOutputReference <a name="PostgresRoleProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

new postgresRole.PostgresRoleProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresRoleProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

---


### PostgresRoleSpecAttributesOutputReference <a name="PostgresRoleSpecAttributesOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

new postgresRole.PostgresRoleSpecAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetBypassrls"></a>

```typescript
public resetBypassrls(): void
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetCreatedb"></a>

```typescript
public resetCreatedb(): void
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetCreaterole"></a>

```typescript
public resetCreaterole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.bypassrlsInput"></a>

```typescript
public readonly bypassrlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createdbInput"></a>

```typescript
public readonly createdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createroleInput"></a>

```typescript
public readonly createroleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresRoleSpecAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a>

---


### PostgresRoleSpecOutputReference <a name="PostgresRoleSpecOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

new postgresRole.PostgresRoleSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: PostgresRoleSpecAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetAuthMethod"></a>

```typescript
public resetAuthMethod(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetMembershipRoles"></a>

```typescript
public resetMembershipRoles(): void
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetPostgresRole"></a>

```typescript
public resetPostgresRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference">PostgresRoleSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.authMethod">authMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.postgresRole">postgresRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.attributes"></a>

```typescript
public readonly attributes: PostgresRoleSpecAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference">PostgresRoleSpecAttributesOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | PostgresRoleSpecAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.authMethodInput"></a>

```typescript
public readonly authMethodInput: string;
```

- *Type:* string

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.membershipRolesInput"></a>

```typescript
public readonly membershipRolesInput: string[];
```

- *Type:* string[]

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.postgresRoleInput"></a>

```typescript
public readonly postgresRoleInput: string;
```

- *Type:* string

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresRoleSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

---


### PostgresRoleStatusAttributesOutputReference <a name="PostgresRoleStatusAttributesOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

new postgresRole.PostgresRoleStatusAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetBypassrls"></a>

```typescript
public resetBypassrls(): void
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetCreatedb"></a>

```typescript
public resetCreatedb(): void
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetCreaterole"></a>

```typescript
public resetCreaterole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.bypassrlsInput"></a>

```typescript
public readonly bypassrlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createdbInput"></a>

```typescript
public readonly createdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createroleInput"></a>

```typescript
public readonly createroleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresRoleStatusAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a>

---


### PostgresRoleStatusOutputReference <a name="PostgresRoleStatusOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer"></a>

```typescript
import { postgresRole } from '@cdktn/provider-databricks'

new postgresRole.PostgresRoleStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: PostgresRoleStatusAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetAuthMethod"></a>

```typescript
public resetAuthMethod(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetMembershipRoles"></a>

```typescript
public resetMembershipRoles(): void
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetPostgresRole"></a>

```typescript
public resetPostgresRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference">PostgresRoleStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.authMethod">authMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.postgresRole">postgresRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus">PostgresRoleStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.attributes"></a>

```typescript
public readonly attributes: PostgresRoleStatusAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference">PostgresRoleStatusAttributesOutputReference</a>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | PostgresRoleStatusAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.authMethodInput"></a>

```typescript
public readonly authMethodInput: string;
```

- *Type:* string

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.membershipRolesInput"></a>

```typescript
public readonly membershipRolesInput: string[];
```

- *Type:* string[]

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.postgresRoleInput"></a>

```typescript
public readonly postgresRoleInput: string;
```

- *Type:* string

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresRoleStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus">PostgresRoleStatus</a>

---



