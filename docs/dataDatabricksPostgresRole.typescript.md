# `dataDatabricksPostgresRole` Submodule <a name="`dataDatabricksPostgresRole` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresRole <a name="DataDatabricksPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role databricks_postgres_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRole.DataDatabricksPostgresRole(scope: Construct, id: string, config: DataDatabricksPostgresRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig">DataDatabricksPostgresRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig">DataDatabricksPostgresRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresRoleProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference">DataDatabricksPostgresRoleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference">DataDatabricksPostgresRoleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference">DataDatabricksPostgresRoleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresRoleProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference">DataDatabricksPostgresRoleProviderConfigOutputReference</a>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresRoleSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference">DataDatabricksPostgresRoleSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresRoleStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference">DataDatabricksPostgresRoleStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresRoleProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresRoleConfig <a name="DataDatabricksPostgresRoleConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRoleConfig: dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#name DataDatabricksPostgresRole#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#provider_config DataDatabricksPostgresRole#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#name DataDatabricksPostgresRole#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresRoleProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#provider_config DataDatabricksPostgresRole#provider_config}.

---

### DataDatabricksPostgresRoleProviderConfig <a name="DataDatabricksPostgresRoleProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRoleProviderConfig: dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#workspace_id DataDatabricksPostgresRole#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#workspace_id DataDatabricksPostgresRole#workspace_id}.

---

### DataDatabricksPostgresRoleSpec <a name="DataDatabricksPostgresRoleSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRoleSpec: dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.authMethod">authMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.identityType">identityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.postgresRole">postgresRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.attributes"></a>

```typescript
public readonly attributes: DataDatabricksPostgresRoleSpecAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}.

---

### DataDatabricksPostgresRoleSpecAttributes <a name="DataDatabricksPostgresRoleSpecAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRoleSpecAttributes: dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}.

---

### DataDatabricksPostgresRoleStatus <a name="DataDatabricksPostgresRoleStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRoleStatus: dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.authMethod">authMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.identityType">identityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.postgresRole">postgresRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.attributes"></a>

```typescript
public readonly attributes: DataDatabricksPostgresRoleStatusAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}.

---

### DataDatabricksPostgresRoleStatusAttributes <a name="DataDatabricksPostgresRoleStatusAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRoleStatusAttributes: dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresRoleProviderConfigOutputReference <a name="DataDatabricksPostgresRoleProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresRoleProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

---


### DataDatabricksPostgresRoleSpecAttributesOutputReference <a name="DataDatabricksPostgresRoleSpecAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetBypassrls"></a>

```typescript
public resetBypassrls(): void
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreatedb"></a>

```typescript
public resetCreatedb(): void
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreaterole"></a>

```typescript
public resetCreaterole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrlsInput"></a>

```typescript
public readonly bypassrlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdbInput"></a>

```typescript
public readonly createdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createroleInput"></a>

```typescript
public readonly createroleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresRoleSpecAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

---


### DataDatabricksPostgresRoleSpecOutputReference <a name="DataDatabricksPostgresRoleSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: DataDatabricksPostgresRoleSpecAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAuthMethod"></a>

```typescript
public resetAuthMethod(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetMembershipRoles"></a>

```typescript
public resetMembershipRoles(): void
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetPostgresRole"></a>

```typescript
public resetPostgresRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference">DataDatabricksPostgresRoleSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethod">authMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRole">postgresRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec">DataDatabricksPostgresRoleSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DataDatabricksPostgresRoleSpecAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference">DataDatabricksPostgresRoleSpecAttributesOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | DataDatabricksPostgresRoleSpecAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethodInput"></a>

```typescript
public readonly authMethodInput: string;
```

- *Type:* string

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRolesInput"></a>

```typescript
public readonly membershipRolesInput: string[];
```

- *Type:* string[]

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRoleInput"></a>

```typescript
public readonly postgresRoleInput: string;
```

- *Type:* string

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresRoleSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec">DataDatabricksPostgresRoleSpec</a>

---


### DataDatabricksPostgresRoleStatusAttributesOutputReference <a name="DataDatabricksPostgresRoleStatusAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetBypassrls"></a>

```typescript
public resetBypassrls(): void
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreatedb"></a>

```typescript
public resetCreatedb(): void
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreaterole"></a>

```typescript
public resetCreaterole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrlsInput"></a>

```typescript
public readonly bypassrlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdbInput"></a>

```typescript
public readonly createdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createroleInput"></a>

```typescript
public readonly createroleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresRoleStatusAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

---


### DataDatabricksPostgresRoleStatusOutputReference <a name="DataDatabricksPostgresRoleStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRole } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: DataDatabricksPostgresRoleStatusAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAuthMethod"></a>

```typescript
public resetAuthMethod(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetMembershipRoles"></a>

```typescript
public resetMembershipRoles(): void
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetPostgresRole"></a>

```typescript
public resetPostgresRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference">DataDatabricksPostgresRoleStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethod">authMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRole">postgresRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus">DataDatabricksPostgresRoleStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DataDatabricksPostgresRoleStatusAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference">DataDatabricksPostgresRoleStatusAttributesOutputReference</a>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | DataDatabricksPostgresRoleStatusAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethodInput"></a>

```typescript
public readonly authMethodInput: string;
```

- *Type:* string

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRolesInput"></a>

```typescript
public readonly membershipRolesInput: string[];
```

- *Type:* string[]

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRoleInput"></a>

```typescript
public readonly postgresRoleInput: string;
```

- *Type:* string

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresRoleStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus">DataDatabricksPostgresRoleStatus</a>

---



