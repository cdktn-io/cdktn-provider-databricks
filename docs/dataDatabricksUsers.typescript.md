# `dataDatabricksUsers` Submodule <a name="`dataDatabricksUsers` Submodule" id="@cdktn/provider-databricks.dataDatabricksUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksUsers <a name="DataDatabricksUsers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users databricks_users}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsers(scope: Construct, id: string, config?: DataDatabricksUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig">DataDatabricksUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig">DataDatabricksUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetApi">resetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetExtraAttributes">resetExtraAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksUsersProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig">DataDatabricksUsersProviderConfig</a>

---

##### `putUsers` <a name="putUsers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putUsers"></a>

```typescript
public putUsers(value: IResolvable | DataDatabricksUsersUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putUsers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>[]

---

##### `resetApi` <a name="resetApi" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetApi"></a>

```typescript
public resetApi(): void
```

##### `resetExtraAttributes` <a name="resetExtraAttributes" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetExtraAttributes"></a>

```typescript
public resetExtraAttributes(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetUsers"></a>

```typescript
public resetUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksUsers resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isConstruct"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

dataDatabricksUsers.DataDatabricksUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformElement"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

dataDatabricksUsers.DataDatabricksUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformDataSource"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

dataDatabricksUsers.DataDatabricksUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksUsers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference">DataDatabricksUsersProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.users">users</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList">DataDatabricksUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.apiInput">apiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.extraAttributesInput">extraAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig">DataDatabricksUsersProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.usersInput">usersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.extraAttributes">extraAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.filter">filter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksUsersProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference">DataDatabricksUsersProviderConfigOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.users"></a>

```typescript
public readonly users: DataDatabricksUsersUsersList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList">DataDatabricksUsersUsersList</a>

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.apiInput"></a>

```typescript
public readonly apiInput: string;
```

- *Type:* string

---

##### `extraAttributesInput`<sup>Optional</sup> <a name="extraAttributesInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.extraAttributesInput"></a>

```typescript
public readonly extraAttributesInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksUsersProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig">DataDatabricksUsersProviderConfig</a>

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.usersInput"></a>

```typescript
public readonly usersInput: IResolvable | DataDatabricksUsersUsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>[]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `extraAttributes`<sup>Required</sup> <a name="extraAttributes" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.extraAttributes"></a>

```typescript
public readonly extraAttributes: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksUsersConfig <a name="DataDatabricksUsersConfig" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

const dataDatabricksUsersConfig: dataDatabricksUsers.DataDatabricksUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.api">api</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#api DataDatabricksUsers#api}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.extraAttributes">extraAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#extra_attributes DataDatabricksUsers#extra_attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#filter DataDatabricksUsers#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig">DataDatabricksUsersProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#provider_config DataDatabricksUsers#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.users">users</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#users DataDatabricksUsers#users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#api DataDatabricksUsers#api}.

---

##### `extraAttributes`<sup>Optional</sup> <a name="extraAttributes" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.extraAttributes"></a>

```typescript
public readonly extraAttributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#extra_attributes DataDatabricksUsers#extra_attributes}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#filter DataDatabricksUsers#filter}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksUsersProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig">DataDatabricksUsersProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#provider_config DataDatabricksUsers#provider_config}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.users"></a>

```typescript
public readonly users: IResolvable | DataDatabricksUsersUsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#users DataDatabricksUsers#users}.

---

### DataDatabricksUsersProviderConfig <a name="DataDatabricksUsersProviderConfig" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

const dataDatabricksUsersProviderConfig: dataDatabricksUsers.DataDatabricksUsersProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#workspace_id DataDatabricksUsers#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#workspace_id DataDatabricksUsers#workspace_id}.

---

### DataDatabricksUsersUsers <a name="DataDatabricksUsersUsers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

const dataDatabricksUsersUsers: dataDatabricksUsers.DataDatabricksUsersUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#active DataDatabricksUsers#active}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display_name DataDatabricksUsers#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.emails">emails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#emails DataDatabricksUsers#emails}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.entitlements">entitlements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#entitlements DataDatabricksUsers#entitlements}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#external_id DataDatabricksUsers#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.groups">groups</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#groups DataDatabricksUsers#groups}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#id DataDatabricksUsers#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.name">name</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#name DataDatabricksUsers#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.roles">roles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#roles DataDatabricksUsers#roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#schemas DataDatabricksUsers#schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#user_name DataDatabricksUsers#user_name}. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#active DataDatabricksUsers#active}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display_name DataDatabricksUsers#display_name}.

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.emails"></a>

```typescript
public readonly emails: IResolvable | DataDatabricksUsersUsersEmails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#emails DataDatabricksUsers#emails}.

---

##### `entitlements`<sup>Optional</sup> <a name="entitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.entitlements"></a>

```typescript
public readonly entitlements: IResolvable | DataDatabricksUsersUsersEntitlements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#entitlements DataDatabricksUsers#entitlements}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#external_id DataDatabricksUsers#external_id}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.groups"></a>

```typescript
public readonly groups: IResolvable | DataDatabricksUsersUsersGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#groups DataDatabricksUsers#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#id DataDatabricksUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.name"></a>

```typescript
public readonly name: DataDatabricksUsersUsersName;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#name DataDatabricksUsers#name}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.roles"></a>

```typescript
public readonly roles: IResolvable | DataDatabricksUsersUsersRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#roles DataDatabricksUsers#roles}.

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#schemas DataDatabricksUsers#schemas}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#user_name DataDatabricksUsers#user_name}.

---

### DataDatabricksUsersUsersEmails <a name="DataDatabricksUsersUsersEmails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

const dataDatabricksUsersUsersEmails: dataDatabricksUsers.DataDatabricksUsersUsersEmails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display DataDatabricksUsers#display}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#primary DataDatabricksUsers#primary}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.ref">ref</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#ref DataDatabricksUsers#ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#type DataDatabricksUsers#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#value DataDatabricksUsers#value}. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display DataDatabricksUsers#display}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#primary DataDatabricksUsers#primary}.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#ref DataDatabricksUsers#ref}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#type DataDatabricksUsers#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#value DataDatabricksUsers#value}.

---

### DataDatabricksUsersUsersEntitlements <a name="DataDatabricksUsersUsersEntitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

const dataDatabricksUsersUsersEntitlements: dataDatabricksUsers.DataDatabricksUsersUsersEntitlements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display DataDatabricksUsers#display}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#primary DataDatabricksUsers#primary}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.ref">ref</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#ref DataDatabricksUsers#ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#type DataDatabricksUsers#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#value DataDatabricksUsers#value}. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display DataDatabricksUsers#display}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#primary DataDatabricksUsers#primary}.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#ref DataDatabricksUsers#ref}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#type DataDatabricksUsers#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#value DataDatabricksUsers#value}.

---

### DataDatabricksUsersUsersGroups <a name="DataDatabricksUsersUsersGroups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

const dataDatabricksUsersUsersGroups: dataDatabricksUsers.DataDatabricksUsersUsersGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display DataDatabricksUsers#display}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#primary DataDatabricksUsers#primary}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.ref">ref</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#ref DataDatabricksUsers#ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#type DataDatabricksUsers#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#value DataDatabricksUsers#value}. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display DataDatabricksUsers#display}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#primary DataDatabricksUsers#primary}.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#ref DataDatabricksUsers#ref}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#type DataDatabricksUsers#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#value DataDatabricksUsers#value}.

---

### DataDatabricksUsersUsersName <a name="DataDatabricksUsersUsersName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

const dataDatabricksUsersUsersName: dataDatabricksUsers.DataDatabricksUsersUsersName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.property.familyName">familyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#family_name DataDatabricksUsers#family_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.property.givenName">givenName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#given_name DataDatabricksUsers#given_name}. |

---

##### `familyName`<sup>Optional</sup> <a name="familyName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#family_name DataDatabricksUsers#family_name}.

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#given_name DataDatabricksUsers#given_name}.

---

### DataDatabricksUsersUsersRoles <a name="DataDatabricksUsersUsersRoles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

const dataDatabricksUsersUsersRoles: dataDatabricksUsers.DataDatabricksUsersUsersRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display DataDatabricksUsers#display}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#primary DataDatabricksUsers#primary}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.ref">ref</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#ref DataDatabricksUsers#ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#type DataDatabricksUsers#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#value DataDatabricksUsers#value}. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#display DataDatabricksUsers#display}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#primary DataDatabricksUsers#primary}.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#ref DataDatabricksUsers#ref}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#type DataDatabricksUsers#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/users#value DataDatabricksUsers#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksUsersProviderConfigOutputReference <a name="DataDatabricksUsersProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig">DataDatabricksUsersProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersProviderConfig">DataDatabricksUsersProviderConfig</a>

---


### DataDatabricksUsersUsersEmailsList <a name="DataDatabricksUsersUsersEmailsList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersEmailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.get"></a>

```typescript
public get(index: number): DataDatabricksUsersUsersEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersEmails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>[]

---


### DataDatabricksUsersUsersEmailsOutputReference <a name="DataDatabricksUsersUsersEmailsOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersEmails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>

---


### DataDatabricksUsersUsersEntitlementsList <a name="DataDatabricksUsersUsersEntitlementsList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.get"></a>

```typescript
public get(index: number): DataDatabricksUsersUsersEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersEntitlements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>[]

---


### DataDatabricksUsersUsersEntitlementsOutputReference <a name="DataDatabricksUsersUsersEntitlementsOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersEntitlements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>

---


### DataDatabricksUsersUsersGroupsList <a name="DataDatabricksUsersUsersGroupsList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.get"></a>

```typescript
public get(index: number): DataDatabricksUsersUsersGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>[]

---


### DataDatabricksUsersUsersGroupsOutputReference <a name="DataDatabricksUsersUsersGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>

---


### DataDatabricksUsersUsersList <a name="DataDatabricksUsersUsersList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.get"></a>

```typescript
public get(index: number): DataDatabricksUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>[]

---


### DataDatabricksUsersUsersNameOutputReference <a name="DataDatabricksUsersUsersNameOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resetFamilyName">resetFamilyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamilyName` <a name="resetFamilyName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resetFamilyName"></a>

```typescript
public resetFamilyName(): void
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resetGivenName"></a>

```typescript
public resetGivenName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.familyName">familyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.familyNameInput"></a>

```typescript
public readonly familyNameInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a>

---


### DataDatabricksUsersUsersOutputReference <a name="DataDatabricksUsersUsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEmails">putEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEntitlements">putEntitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putGroups">putGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetEmails">resetEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetEntitlements">resetEntitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetSchemas">resetSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmails` <a name="putEmails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEmails"></a>

```typescript
public putEmails(value: IResolvable | DataDatabricksUsersUsersEmails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEmails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>[]

---

##### `putEntitlements` <a name="putEntitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEntitlements"></a>

```typescript
public putEntitlements(value: IResolvable | DataDatabricksUsersUsersEntitlements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEntitlements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>[]

---

##### `putGroups` <a name="putGroups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putGroups"></a>

```typescript
public putGroups(value: IResolvable | DataDatabricksUsersUsersGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>[]

---

##### `putName` <a name="putName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putName"></a>

```typescript
public putName(value: DataDatabricksUsersUsersName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a>

---

##### `putRoles` <a name="putRoles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putRoles"></a>

```typescript
public putRoles(value: IResolvable | DataDatabricksUsersUsersRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>[]

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmails` <a name="resetEmails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetEmails"></a>

```typescript
public resetEmails(): void
```

##### `resetEntitlements` <a name="resetEntitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetEntitlements"></a>

```typescript
public resetEntitlements(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetSchemas` <a name="resetSchemas" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetSchemas"></a>

```typescript
public resetSchemas(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.emails">emails</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList">DataDatabricksUsersUsersEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.entitlements">entitlements</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList">DataDatabricksUsersUsersEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.groups">groups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList">DataDatabricksUsersUsersGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.name">name</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference">DataDatabricksUsersUsersNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList">DataDatabricksUsersUsersRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.emailsInput">emailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.entitlementsInput">entitlementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.groupsInput">groupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.nameInput">nameInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.rolesInput">rolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.emails"></a>

```typescript
public readonly emails: DataDatabricksUsersUsersEmailsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList">DataDatabricksUsersUsersEmailsList</a>

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.entitlements"></a>

```typescript
public readonly entitlements: DataDatabricksUsersUsersEntitlementsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList">DataDatabricksUsersUsersEntitlementsList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.groups"></a>

```typescript
public readonly groups: DataDatabricksUsersUsersGroupsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList">DataDatabricksUsersUsersGroupsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.name"></a>

```typescript
public readonly name: DataDatabricksUsersUsersNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference">DataDatabricksUsersUsersNameOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.roles"></a>

```typescript
public readonly roles: DataDatabricksUsersUsersRolesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList">DataDatabricksUsersUsersRolesList</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.emailsInput"></a>

```typescript
public readonly emailsInput: IResolvable | DataDatabricksUsersUsersEmails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>[]

---

##### `entitlementsInput`<sup>Optional</sup> <a name="entitlementsInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.entitlementsInput"></a>

```typescript
public readonly entitlementsInput: IResolvable | DataDatabricksUsersUsersEntitlements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>[]

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: IResolvable | DataDatabricksUsersUsersGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: IResolvable | DataDatabricksUsersUsersName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: IResolvable | DataDatabricksUsersUsersRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>[]

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>

---


### DataDatabricksUsersUsersRolesList <a name="DataDatabricksUsersUsersRolesList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.get"></a>

```typescript
public get(index: number): DataDatabricksUsersUsersRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>[]

---


### DataDatabricksUsersUsersRolesOutputReference <a name="DataDatabricksUsersUsersRolesOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksUsers } from '@cdktn/provider-databricks'

new dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksUsersUsersRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>

---



