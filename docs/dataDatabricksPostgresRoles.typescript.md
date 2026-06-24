# `dataDatabricksPostgresRoles` Submodule <a name="`dataDatabricksPostgresRoles` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresRoles <a name="DataDatabricksPostgresRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles databricks_postgres_roles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRoles(scope: Construct, id: string, config: DataDatabricksPostgresRolesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig">DataDatabricksPostgresRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig">DataDatabricksPostgresRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresRolesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference">DataDatabricksPostgresRolesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList">DataDatabricksPostgresRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresRolesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference">DataDatabricksPostgresRolesProviderConfigOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.roles"></a>

```typescript
public readonly roles: DataDatabricksPostgresRolesRolesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList">DataDatabricksPostgresRolesRolesList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresRolesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresRolesConfig <a name="DataDatabricksPostgresRolesConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRolesConfig: dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresRolesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

### DataDatabricksPostgresRolesProviderConfig <a name="DataDatabricksPostgresRolesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRolesProviderConfig: dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

### DataDatabricksPostgresRolesRoles <a name="DataDatabricksPostgresRolesRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRolesRoles: dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresRolesRolesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

### DataDatabricksPostgresRolesRolesProviderConfig <a name="DataDatabricksPostgresRolesRolesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRolesRolesProviderConfig: dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

### DataDatabricksPostgresRolesRolesSpec <a name="DataDatabricksPostgresRolesRolesSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRolesRolesSpec: dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.authMethod">authMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.identityType">identityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.postgresRole">postgresRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.attributes"></a>

```typescript
public readonly attributes: DataDatabricksPostgresRolesRolesSpecAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}.

---

### DataDatabricksPostgresRolesRolesSpecAttributes <a name="DataDatabricksPostgresRolesRolesSpecAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRolesRolesSpecAttributes: dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

### DataDatabricksPostgresRolesRolesStatus <a name="DataDatabricksPostgresRolesRolesStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRolesRolesStatus: dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.authMethod">authMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.identityType">identityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.postgresRole">postgresRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.attributes"></a>

```typescript
public readonly attributes: DataDatabricksPostgresRolesRolesStatusAttributes;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}.

---

### DataDatabricksPostgresRolesRolesStatusAttributes <a name="DataDatabricksPostgresRolesRolesStatusAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

const dataDatabricksPostgresRolesRolesStatusAttributes: dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresRolesProviderConfigOutputReference <a name="DataDatabricksPostgresRolesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresRolesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---


### DataDatabricksPostgresRolesRolesList <a name="DataDatabricksPostgresRolesRolesList" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresRolesRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>[]

---


### DataDatabricksPostgresRolesRolesOutputReference <a name="DataDatabricksPostgresRolesRolesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresRolesRolesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference">DataDatabricksPostgresRolesRolesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference">DataDatabricksPostgresRolesRolesSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference">DataDatabricksPostgresRolesRolesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresRolesRolesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference">DataDatabricksPostgresRolesRolesProviderConfigOutputReference</a>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresRolesRolesSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference">DataDatabricksPostgresRolesRolesSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresRolesRolesStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference">DataDatabricksPostgresRolesRolesStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresRolesRolesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresRolesRoles;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>

---


### DataDatabricksPostgresRolesRolesProviderConfigOutputReference <a name="DataDatabricksPostgresRolesRolesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresRolesRolesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---


### DataDatabricksPostgresRolesRolesSpecAttributesOutputReference <a name="DataDatabricksPostgresRolesRolesSpecAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetBypassrls"></a>

```typescript
public resetBypassrls(): void
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreatedb"></a>

```typescript
public resetCreatedb(): void
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreaterole"></a>

```typescript
public resetCreaterole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrlsInput"></a>

```typescript
public readonly bypassrlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdbInput"></a>

```typescript
public readonly createdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createroleInput"></a>

```typescript
public readonly createroleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresRolesRolesSpecAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---


### DataDatabricksPostgresRolesRolesSpecOutputReference <a name="DataDatabricksPostgresRolesRolesSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: DataDatabricksPostgresRolesRolesSpecAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAuthMethod"></a>

```typescript
public resetAuthMethod(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetMembershipRoles"></a>

```typescript
public resetMembershipRoles(): void
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetPostgresRole"></a>

```typescript
public resetPostgresRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference">DataDatabricksPostgresRolesRolesSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethod">authMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRole">postgresRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec">DataDatabricksPostgresRolesRolesSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DataDatabricksPostgresRolesRolesSpecAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference">DataDatabricksPostgresRolesRolesSpecAttributesOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | DataDatabricksPostgresRolesRolesSpecAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethodInput"></a>

```typescript
public readonly authMethodInput: string;
```

- *Type:* string

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRolesInput"></a>

```typescript
public readonly membershipRolesInput: string[];
```

- *Type:* string[]

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRoleInput"></a>

```typescript
public readonly postgresRoleInput: string;
```

- *Type:* string

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresRolesRolesSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec">DataDatabricksPostgresRolesRolesSpec</a>

---


### DataDatabricksPostgresRolesRolesStatusAttributesOutputReference <a name="DataDatabricksPostgresRolesRolesStatusAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetBypassrls"></a>

```typescript
public resetBypassrls(): void
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreatedb"></a>

```typescript
public resetCreatedb(): void
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreaterole"></a>

```typescript
public resetCreaterole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdb">createdb</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createrole">createrole</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrlsInput"></a>

```typescript
public readonly bypassrlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdbInput"></a>

```typescript
public readonly createdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createroleInput"></a>

```typescript
public readonly createroleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrls"></a>

```typescript
public readonly bypassrls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdb"></a>

```typescript
public readonly createdb: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createrole"></a>

```typescript
public readonly createrole: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresRolesRolesStatusAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---


### DataDatabricksPostgresRolesRolesStatusOutputReference <a name="DataDatabricksPostgresRolesRolesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresRoles } from '@cdktn/provider-databricks'

new dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: DataDatabricksPostgresRolesRolesStatusAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAuthMethod"></a>

```typescript
public resetAuthMethod(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetMembershipRoles"></a>

```typescript
public resetMembershipRoles(): void
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetPostgresRole"></a>

```typescript
public resetPostgresRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference">DataDatabricksPostgresRolesRolesStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethod">authMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRole">postgresRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus">DataDatabricksPostgresRolesRolesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DataDatabricksPostgresRolesRolesStatusAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference">DataDatabricksPostgresRolesRolesStatusAttributesOutputReference</a>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | DataDatabricksPostgresRolesRolesStatusAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethodInput"></a>

```typescript
public readonly authMethodInput: string;
```

- *Type:* string

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRolesInput"></a>

```typescript
public readonly membershipRolesInput: string[];
```

- *Type:* string[]

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRoleInput"></a>

```typescript
public readonly postgresRoleInput: string;
```

- *Type:* string

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRoles"></a>

```typescript
public readonly membershipRoles: string[];
```

- *Type:* string[]

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRole"></a>

```typescript
public readonly postgresRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresRolesRolesStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus">DataDatabricksPostgresRolesRolesStatus</a>

---



