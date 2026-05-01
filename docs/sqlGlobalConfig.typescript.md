# `sqlGlobalConfig` Submodule <a name="`sqlGlobalConfig` Submodule" id="@cdktn/provider-databricks.sqlGlobalConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlGlobalConfig <a name="SqlGlobalConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config databricks_sql_global_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer"></a>

```typescript
import { sqlGlobalConfig } from '@cdktn/provider-databricks'

new sqlGlobalConfig.SqlGlobalConfig(scope: Construct, id: string, config?: SqlGlobalConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig">SqlGlobalConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig">SqlGlobalConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetDataAccessConfig">resetDataAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetEnableServerlessCompute">resetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetGoogleServiceAccount">resetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSqlConfigParams">resetSqlConfigParams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.putProviderConfig"></a>

```typescript
public putProviderConfig(value: SqlGlobalConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

---

##### `resetDataAccessConfig` <a name="resetDataAccessConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetDataAccessConfig"></a>

```typescript
public resetDataAccessConfig(): void
```

##### `resetEnableServerlessCompute` <a name="resetEnableServerlessCompute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetEnableServerlessCompute"></a>

```typescript
public resetEnableServerlessCompute(): void
```

##### `resetGoogleServiceAccount` <a name="resetGoogleServiceAccount" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetGoogleServiceAccount"></a>

```typescript
public resetGoogleServiceAccount(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetSqlConfigParams` <a name="resetSqlConfigParams" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSqlConfigParams"></a>

```typescript
public resetSqlConfigParams(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SqlGlobalConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct"></a>

```typescript
import { sqlGlobalConfig } from '@cdktn/provider-databricks'

sqlGlobalConfig.SqlGlobalConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement"></a>

```typescript
import { sqlGlobalConfig } from '@cdktn/provider-databricks'

sqlGlobalConfig.SqlGlobalConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource"></a>

```typescript
import { sqlGlobalConfig } from '@cdktn/provider-databricks'

sqlGlobalConfig.SqlGlobalConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport"></a>

```typescript
import { sqlGlobalConfig } from '@cdktn/provider-databricks'

sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SqlGlobalConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlGlobalConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlGlobalConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SqlGlobalConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference">SqlGlobalConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfigInput">dataAccessConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessComputeInput">enableServerlessComputeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParamsInput">sqlConfigParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfig">dataAccessConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParams">sqlConfigParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: SqlGlobalConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference">SqlGlobalConfigProviderConfigOutputReference</a>

---

##### `dataAccessConfigInput`<sup>Optional</sup> <a name="dataAccessConfigInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfigInput"></a>

```typescript
public readonly dataAccessConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableServerlessComputeInput`<sup>Optional</sup> <a name="enableServerlessComputeInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessComputeInput"></a>

```typescript
public readonly enableServerlessComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccountInput"></a>

```typescript
public readonly googleServiceAccountInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: SqlGlobalConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `sqlConfigParamsInput`<sup>Optional</sup> <a name="sqlConfigParamsInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParamsInput"></a>

```typescript
public readonly sqlConfigParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataAccessConfig`<sup>Required</sup> <a name="dataAccessConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfig"></a>

```typescript
public readonly dataAccessConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableServerlessCompute`<sup>Required</sup> <a name="enableServerlessCompute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessCompute"></a>

```typescript
public readonly enableServerlessCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `googleServiceAccount`<sup>Required</sup> <a name="googleServiceAccount" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccount"></a>

```typescript
public readonly googleServiceAccount: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `sqlConfigParams`<sup>Required</sup> <a name="sqlConfigParams" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParams"></a>

```typescript
public readonly sqlConfigParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlGlobalConfigConfig <a name="SqlGlobalConfigConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.Initializer"></a>

```typescript
import { sqlGlobalConfig } from '@cdktn/provider-databricks'

const sqlGlobalConfigConfig: sqlGlobalConfig.SqlGlobalConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dataAccessConfig">dataAccessConfig</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#id SqlGlobalConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.sqlConfigParams">sqlConfigParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataAccessConfig`<sup>Optional</sup> <a name="dataAccessConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dataAccessConfig"></a>

```typescript
public readonly dataAccessConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.enableServerlessCompute"></a>

```typescript
public readonly enableServerlessCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.googleServiceAccount"></a>

```typescript
public readonly googleServiceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#id SqlGlobalConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: SqlGlobalConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#provider_config SqlGlobalConfig#provider_config}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}.

---

##### `sqlConfigParams`<sup>Optional</sup> <a name="sqlConfigParams" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.sqlConfigParams"></a>

```typescript
public readonly sqlConfigParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}.

---

### SqlGlobalConfigProviderConfig <a name="SqlGlobalConfigProviderConfig" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig.Initializer"></a>

```typescript
import { sqlGlobalConfig } from '@cdktn/provider-databricks'

const sqlGlobalConfigProviderConfig: sqlGlobalConfig.SqlGlobalConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#workspace_id SqlGlobalConfig#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/sql_global_config#workspace_id SqlGlobalConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlGlobalConfigProviderConfigOutputReference <a name="SqlGlobalConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { sqlGlobalConfig } from '@cdktn/provider-databricks'

new sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlGlobalConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlGlobalConfig.SqlGlobalConfigProviderConfig">SqlGlobalConfigProviderConfig</a>

---



