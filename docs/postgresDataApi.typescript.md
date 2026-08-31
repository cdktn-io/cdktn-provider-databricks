# `postgresDataApi` Submodule <a name="`postgresDataApi` Submodule" id="@cdktn/provider-databricks.postgresDataApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresDataApi <a name="PostgresDataApi" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api databricks_postgres_data_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

new postgresDataApi.PostgresDataApi(scope: Construct, id: string, config: PostgresDataApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig">PostgresDataApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig">PostgresDataApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig"></a>

```typescript
public putProviderConfig(value: PostgresDataApiProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec"></a>

```typescript
public putSpec(value: PostgresDataApiSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

postgresDataApi.PostgresDataApi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

postgresDataApi.PostgresDataApi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

postgresDataApi.PostgresDataApi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

postgresDataApi.PostgresDataApi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresDataApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresDataApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresDataApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference">PostgresDataApiProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference">PostgresDataApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference">PostgresDataApiStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.specInput">specInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresDataApiProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference">PostgresDataApiProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.spec"></a>

```typescript
public readonly spec: PostgresDataApiSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference">PostgresDataApiSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.status"></a>

```typescript
public readonly status: PostgresDataApiStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference">PostgresDataApiStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | PostgresDataApiProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | PostgresDataApiSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresDataApiConfig <a name="PostgresDataApiConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.Initializer"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

const postgresDataApiConfig: postgresDataApi.PostgresDataApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: PostgresDataApiProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.spec"></a>

```typescript
public readonly spec: PostgresDataApiSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}.

---

### PostgresDataApiProviderConfig <a name="PostgresDataApiProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.Initializer"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

const postgresDataApiProviderConfig: postgresDataApi.PostgresDataApiProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}.

---

### PostgresDataApiSpec <a name="PostgresDataApiSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.Initializer"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

const postgresDataApiSpec: postgresDataApi.PostgresDataApiSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbMaxRows">dbMaxRows</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbSchemas">dbSchemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.openapiMode">openapiMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}. |

---

##### `dbAggregatesEnabled`<sup>Optional</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbAggregatesEnabled"></a>

```typescript
public readonly dbAggregatesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}.

---

##### `dbExtraSearchPath`<sup>Optional</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbExtraSearchPath"></a>

```typescript
public readonly dbExtraSearchPath: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}.

---

##### `dbMaxRows`<sup>Optional</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbMaxRows"></a>

```typescript
public readonly dbMaxRows: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}.

---

##### `dbSchemas`<sup>Optional</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbSchemas"></a>

```typescript
public readonly dbSchemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}.

---

##### `jwtCacheMaxLifetime`<sup>Optional</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtCacheMaxLifetime"></a>

```typescript
public readonly jwtCacheMaxLifetime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}.

---

##### `jwtRoleClaimKey`<sup>Optional</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtRoleClaimKey"></a>

```typescript
public readonly jwtRoleClaimKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}.

---

##### `openapiMode`<sup>Optional</sup> <a name="openapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.openapiMode"></a>

```typescript
public readonly openapiMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}.

---

##### `serverCorsAllowedOrigins`<sup>Optional</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverCorsAllowedOrigins"></a>

```typescript
public readonly serverCorsAllowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}.

---

##### `serverTimingEnabled`<sup>Optional</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverTimingEnabled"></a>

```typescript
public readonly serverTimingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}.

---

### PostgresDataApiStatus <a name="PostgresDataApiStatus" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus.Initializer"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

const postgresDataApiStatus: postgresDataApi.PostgresDataApiStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresDataApiProviderConfigOutputReference <a name="PostgresDataApiProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

new postgresDataApi.PostgresDataApiProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresDataApiProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---


### PostgresDataApiSpecOutputReference <a name="PostgresDataApiSpecOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

new postgresDataApi.PostgresDataApiSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbAggregatesEnabled">resetDbAggregatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbExtraSearchPath">resetDbExtraSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbMaxRows">resetDbMaxRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbSchemas">resetDbSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime">resetJwtCacheMaxLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtRoleClaimKey">resetJwtRoleClaimKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetOpenapiMode">resetOpenapiMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins">resetServerCorsAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerTimingEnabled">resetServerTimingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbAggregatesEnabled` <a name="resetDbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbAggregatesEnabled"></a>

```typescript
public resetDbAggregatesEnabled(): void
```

##### `resetDbExtraSearchPath` <a name="resetDbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbExtraSearchPath"></a>

```typescript
public resetDbExtraSearchPath(): void
```

##### `resetDbMaxRows` <a name="resetDbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbMaxRows"></a>

```typescript
public resetDbMaxRows(): void
```

##### `resetDbSchemas` <a name="resetDbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbSchemas"></a>

```typescript
public resetDbSchemas(): void
```

##### `resetJwtCacheMaxLifetime` <a name="resetJwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime"></a>

```typescript
public resetJwtCacheMaxLifetime(): void
```

##### `resetJwtRoleClaimKey` <a name="resetJwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtRoleClaimKey"></a>

```typescript
public resetJwtRoleClaimKey(): void
```

##### `resetOpenapiMode` <a name="resetOpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetOpenapiMode"></a>

```typescript
public resetOpenapiMode(): void
```

##### `resetServerCorsAllowedOrigins` <a name="resetServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins"></a>

```typescript
public resetServerCorsAllowedOrigins(): void
```

##### `resetServerTimingEnabled` <a name="resetServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerTimingEnabled"></a>

```typescript
public resetServerTimingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput">dbAggregatesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput">dbExtraSearchPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRowsInput">dbMaxRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemasInput">dbSchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput">jwtCacheMaxLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput">jwtRoleClaimKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiModeInput">openapiModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput">serverCorsAllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabledInput">serverTimingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRows">dbMaxRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemas">dbSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiMode">openapiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbAggregatesEnabledInput`<sup>Optional</sup> <a name="dbAggregatesEnabledInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput"></a>

```typescript
public readonly dbAggregatesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbExtraSearchPathInput`<sup>Optional</sup> <a name="dbExtraSearchPathInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput"></a>

```typescript
public readonly dbExtraSearchPathInput: string[];
```

- *Type:* string[]

---

##### `dbMaxRowsInput`<sup>Optional</sup> <a name="dbMaxRowsInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRowsInput"></a>

```typescript
public readonly dbMaxRowsInput: number;
```

- *Type:* number

---

##### `dbSchemasInput`<sup>Optional</sup> <a name="dbSchemasInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemasInput"></a>

```typescript
public readonly dbSchemasInput: string[];
```

- *Type:* string[]

---

##### `jwtCacheMaxLifetimeInput`<sup>Optional</sup> <a name="jwtCacheMaxLifetimeInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput"></a>

```typescript
public readonly jwtCacheMaxLifetimeInput: string;
```

- *Type:* string

---

##### `jwtRoleClaimKeyInput`<sup>Optional</sup> <a name="jwtRoleClaimKeyInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput"></a>

```typescript
public readonly jwtRoleClaimKeyInput: string;
```

- *Type:* string

---

##### `openapiModeInput`<sup>Optional</sup> <a name="openapiModeInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiModeInput"></a>

```typescript
public readonly openapiModeInput: string;
```

- *Type:* string

---

##### `serverCorsAllowedOriginsInput`<sup>Optional</sup> <a name="serverCorsAllowedOriginsInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput"></a>

```typescript
public readonly serverCorsAllowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `serverTimingEnabledInput`<sup>Optional</sup> <a name="serverTimingEnabledInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabledInput"></a>

```typescript
public readonly serverTimingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbAggregatesEnabled`<sup>Required</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabled"></a>

```typescript
public readonly dbAggregatesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbExtraSearchPath`<sup>Required</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPath"></a>

```typescript
public readonly dbExtraSearchPath: string[];
```

- *Type:* string[]

---

##### `dbMaxRows`<sup>Required</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRows"></a>

```typescript
public readonly dbMaxRows: number;
```

- *Type:* number

---

##### `dbSchemas`<sup>Required</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemas"></a>

```typescript
public readonly dbSchemas: string[];
```

- *Type:* string[]

---

##### `jwtCacheMaxLifetime`<sup>Required</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime"></a>

```typescript
public readonly jwtCacheMaxLifetime: string;
```

- *Type:* string

---

##### `jwtRoleClaimKey`<sup>Required</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKey"></a>

```typescript
public readonly jwtRoleClaimKey: string;
```

- *Type:* string

---

##### `openapiMode`<sup>Required</sup> <a name="openapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiMode"></a>

```typescript
public readonly openapiMode: string;
```

- *Type:* string

---

##### `serverCorsAllowedOrigins`<sup>Required</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins"></a>

```typescript
public readonly serverCorsAllowedOrigins: string[];
```

- *Type:* string[]

---

##### `serverTimingEnabled`<sup>Required</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabled"></a>

```typescript
public readonly serverTimingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresDataApiSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---


### PostgresDataApiStatusOutputReference <a name="PostgresDataApiStatusOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer"></a>

```typescript
import { postgresDataApi } from '@cdktn/provider-databricks'

new postgresDataApi.PostgresDataApiStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.availableSchemas">availableSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbMaxRows">dbMaxRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbSchemas">dbSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.openapiMode">openapiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus">PostgresDataApiStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableSchemas`<sup>Required</sup> <a name="availableSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.availableSchemas"></a>

```typescript
public readonly availableSchemas: string[];
```

- *Type:* string[]

---

##### `dbAggregatesEnabled`<sup>Required</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbAggregatesEnabled"></a>

```typescript
public readonly dbAggregatesEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dbExtraSearchPath`<sup>Required</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbExtraSearchPath"></a>

```typescript
public readonly dbExtraSearchPath: string[];
```

- *Type:* string[]

---

##### `dbMaxRows`<sup>Required</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbMaxRows"></a>

```typescript
public readonly dbMaxRows: number;
```

- *Type:* number

---

##### `dbSchemas`<sup>Required</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbSchemas"></a>

```typescript
public readonly dbSchemas: string[];
```

- *Type:* string[]

---

##### `jwtCacheMaxLifetime`<sup>Required</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime"></a>

```typescript
public readonly jwtCacheMaxLifetime: string;
```

- *Type:* string

---

##### `jwtRoleClaimKey`<sup>Required</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtRoleClaimKey"></a>

```typescript
public readonly jwtRoleClaimKey: string;
```

- *Type:* string

---

##### `openapiMode`<sup>Required</sup> <a name="openapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.openapiMode"></a>

```typescript
public readonly openapiMode: string;
```

- *Type:* string

---

##### `serverCorsAllowedOrigins`<sup>Required</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins"></a>

```typescript
public readonly serverCorsAllowedOrigins: string[];
```

- *Type:* string[]

---

##### `serverTimingEnabled`<sup>Required</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverTimingEnabled"></a>

```typescript
public readonly serverTimingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresDataApiStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus">PostgresDataApiStatus</a>

---



