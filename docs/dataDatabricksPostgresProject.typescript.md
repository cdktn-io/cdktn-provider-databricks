# `dataDatabricksPostgresProject` Submodule <a name="`dataDatabricksPostgresProject` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresProject <a name="DataDatabricksPostgresProject" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project databricks_postgres_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProject(scope: Construct, id: string, config: DataDatabricksPostgresProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig">DataDatabricksPostgresProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig">DataDatabricksPostgresProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresProjectProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialEndpointSpec">initialEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference">DataDatabricksPostgresProjectProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference">DataDatabricksPostgresProjectSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference">DataDatabricksPostgresProjectStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `initialEndpointSpec`<sup>Required</sup> <a name="initialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialEndpointSpec"></a>

```typescript
public readonly initialEndpointSpec: DataDatabricksPostgresProjectInitialEndpointSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresProjectProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference">DataDatabricksPostgresProjectProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresProjectSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference">DataDatabricksPostgresProjectSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresProjectStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference">DataDatabricksPostgresProjectStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresProjectProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresProjectConfig <a name="DataDatabricksPostgresProjectConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectConfig: dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#name DataDatabricksPostgresProject#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#provider_config DataDatabricksPostgresProject#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#name DataDatabricksPostgresProject#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresProjectProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#provider_config DataDatabricksPostgresProject#provider_config}.

---

### DataDatabricksPostgresProjectInitialEndpointSpec <a name="DataDatabricksPostgresProjectInitialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectInitialEndpointSpec: dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#group DataDatabricksPostgresProject#group}. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.group"></a>

```typescript
public readonly group: DataDatabricksPostgresProjectInitialEndpointSpecGroup;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#group DataDatabricksPostgresProject#group}.

---

### DataDatabricksPostgresProjectInitialEndpointSpecGroup <a name="DataDatabricksPostgresProjectInitialEndpointSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectInitialEndpointSpecGroup: dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#max DataDatabricksPostgresProject#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#min DataDatabricksPostgresProject#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#enable_readable_secondaries DataDatabricksPostgresProject#enable_readable_secondaries}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#max DataDatabricksPostgresProject#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#min DataDatabricksPostgresProject#min}.

---

##### `enableReadableSecondaries`<sup>Optional</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#enable_readable_secondaries DataDatabricksPostgresProject#enable_readable_secondaries}.

---

### DataDatabricksPostgresProjectProviderConfig <a name="DataDatabricksPostgresProjectProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectProviderConfig: dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#workspace_id DataDatabricksPostgresProject#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#workspace_id DataDatabricksPostgresProject#workspace_id}.

---

### DataDatabricksPostgresProjectSpec <a name="DataDatabricksPostgresProjectSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectSpec: dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#budget_policy_id DataDatabricksPostgresProject#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.customTags">customTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#custom_tags DataDatabricksPostgresProject#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#default_endpoint_settings DataDatabricksPostgresProject#default_endpoint_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#display_name DataDatabricksPostgresProject#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#history_retention_duration DataDatabricksPostgresProject#history_retention_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.pgVersion">pgVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#pg_version DataDatabricksPostgresProject#pg_version}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#budget_policy_id DataDatabricksPostgresProject#budget_policy_id}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.customTags"></a>

```typescript
public readonly customTags: IResolvable | DataDatabricksPostgresProjectSpecCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#custom_tags DataDatabricksPostgresProject#custom_tags}.

---

##### `defaultEndpointSettings`<sup>Optional</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: DataDatabricksPostgresProjectSpecDefaultEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#default_endpoint_settings DataDatabricksPostgresProject#default_endpoint_settings}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#display_name DataDatabricksPostgresProject#display_name}.

---

##### `historyRetentionDuration`<sup>Optional</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.historyRetentionDuration"></a>

```typescript
public readonly historyRetentionDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#history_retention_duration DataDatabricksPostgresProject#history_retention_duration}.

---

##### `pgVersion`<sup>Optional</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#pg_version DataDatabricksPostgresProject#pg_version}.

---

### DataDatabricksPostgresProjectSpecCustomTags <a name="DataDatabricksPostgresProjectSpecCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectSpecCustomTags: dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}.

---

### DataDatabricksPostgresProjectSpecDefaultEndpointSettings <a name="DataDatabricksPostgresProjectSpecDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectSpecDefaultEndpointSettings: dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectStatus <a name="DataDatabricksPostgresProjectStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectStatus: dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus = { ... }
```


### DataDatabricksPostgresProjectStatusCustomTags <a name="DataDatabricksPostgresProjectStatusCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectStatusCustomTags: dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}.

---

### DataDatabricksPostgresProjectStatusDefaultEndpointSettings <a name="DataDatabricksPostgresProjectStatusDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

const dataDatabricksPostgresProjectStatusDefaultEndpointSettings: dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference <a name="DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">resetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableReadableSecondaries` <a name="resetEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```typescript
public resetEnableReadableSecondaries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">enableReadableSecondariesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableReadableSecondariesInput`<sup>Optional</sup> <a name="enableReadableSecondariesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```typescript
public readonly enableReadableSecondariesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectInitialEndpointSpecGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

---


### DataDatabricksPostgresProjectInitialEndpointSpecOutputReference <a name="DataDatabricksPostgresProjectInitialEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetGroup">resetGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroup` <a name="putGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup"></a>

```typescript
public putGroup(value: DataDatabricksPostgresProjectInitialEndpointSpecGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.groupInput">groupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec">DataDatabricksPostgresProjectInitialEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.group"></a>

```typescript
public readonly group: DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | DataDatabricksPostgresProjectInitialEndpointSpecGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectInitialEndpointSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec">DataDatabricksPostgresProjectInitialEndpointSpec</a>

---


### DataDatabricksPostgresProjectProviderConfigOutputReference <a name="DataDatabricksPostgresProjectProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

---


### DataDatabricksPostgresProjectSpecCustomTagsList <a name="DataDatabricksPostgresProjectSpecCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresProjectSpecCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectSpecCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>[]

---


### DataDatabricksPostgresProjectSpecCustomTagsOutputReference <a name="DataDatabricksPostgresProjectSpecCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectSpecCustomTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>

---


### DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```typescript
public resetAutoscalingLimitMaxCu(): void
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```typescript
public resetAutoscalingLimitMinCu(): void
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```typescript
public resetNoSuspension(): void
```

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```typescript
public resetPgSettings(): void
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```typescript
public resetSuspendTimeoutDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```typescript
public readonly autoscalingLimitMaxCuInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```typescript
public readonly autoscalingLimitMinCuInput: number;
```

- *Type:* number

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```typescript
public readonly noSuspensionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```typescript
public readonly pgSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```typescript
public readonly suspendTimeoutDurationInput: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectSpecDefaultEndpointSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectSpecOutputReference <a name="DataDatabricksPostgresProjectSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags">putCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings">putDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultEndpointSettings">resetDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetHistoryRetentionDuration">resetHistoryRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetPgVersion">resetPgVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomTags` <a name="putCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags"></a>

```typescript
public putCustomTags(value: IResolvable | DataDatabricksPostgresProjectSpecCustomTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>[]

---

##### `putDefaultEndpointSettings` <a name="putDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings"></a>

```typescript
public putDefaultEndpointSettings(value: DataDatabricksPostgresProjectSpecDefaultEndpointSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetDefaultEndpointSettings` <a name="resetDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultEndpointSettings"></a>

```typescript
public resetDefaultEndpointSettings(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetHistoryRetentionDuration` <a name="resetHistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetHistoryRetentionDuration"></a>

```typescript
public resetHistoryRetentionDuration(): void
```

##### `resetPgVersion` <a name="resetPgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetPgVersion"></a>

```typescript
public resetPgVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList">DataDatabricksPostgresProjectSpecCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTagsInput">customTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettingsInput">defaultEndpointSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDurationInput">historyRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersionInput">pgVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersion">pgVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec">DataDatabricksPostgresProjectSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksPostgresProjectSpecCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList">DataDatabricksPostgresProjectSpecCustomTagsList</a>

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference</a>

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: IResolvable | DataDatabricksPostgresProjectSpecCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>[]

---

##### `defaultEndpointSettingsInput`<sup>Optional</sup> <a name="defaultEndpointSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettingsInput"></a>

```typescript
public readonly defaultEndpointSettingsInput: IResolvable | DataDatabricksPostgresProjectSpecDefaultEndpointSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `historyRetentionDurationInput`<sup>Optional</sup> <a name="historyRetentionDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDurationInput"></a>

```typescript
public readonly historyRetentionDurationInput: string;
```

- *Type:* string

---

##### `pgVersionInput`<sup>Optional</sup> <a name="pgVersionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersionInput"></a>

```typescript
public readonly pgVersionInput: number;
```

- *Type:* number

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `historyRetentionDuration`<sup>Required</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDuration"></a>

```typescript
public readonly historyRetentionDuration: string;
```

- *Type:* string

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec">DataDatabricksPostgresProjectSpec</a>

---


### DataDatabricksPostgresProjectStatusCustomTagsList <a name="DataDatabricksPostgresProjectStatusCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresProjectStatusCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresProjectStatusCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a>[]

---


### DataDatabricksPostgresProjectStatusCustomTagsOutputReference <a name="DataDatabricksPostgresProjectStatusCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectStatusCustomTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a>

---


### DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```typescript
public resetAutoscalingLimitMaxCu(): void
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```typescript
public resetAutoscalingLimitMinCu(): void
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```typescript
public resetNoSuspension(): void
```

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```typescript
public resetPgSettings(): void
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```typescript
public resetSuspendTimeoutDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings">DataDatabricksPostgresProjectStatusDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```typescript
public readonly autoscalingLimitMaxCuInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```typescript
public readonly autoscalingLimitMinCuInput: number;
```

- *Type:* number

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```typescript
public readonly noSuspensionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```typescript
public readonly pgSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```typescript
public readonly suspendTimeoutDurationInput: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectStatusDefaultEndpointSettings;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings">DataDatabricksPostgresProjectStatusDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectStatusOutputReference <a name="DataDatabricksPostgresProjectStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresProject } from '@cdktn/provider-databricks'

new dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.branchLogicalSizeLimitBytes">branchLogicalSizeLimitBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList">DataDatabricksPostgresProjectStatusCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.pgVersion">pgVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.syntheticStorageSizeBytes">syntheticStorageSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus">DataDatabricksPostgresProjectStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchLogicalSizeLimitBytes`<sup>Required</sup> <a name="branchLogicalSizeLimitBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.branchLogicalSizeLimitBytes"></a>

```typescript
public readonly branchLogicalSizeLimitBytes: number;
```

- *Type:* number

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksPostgresProjectStatusCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList">DataDatabricksPostgresProjectStatusCustomTagsList</a>

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultEndpointSettings"></a>

```typescript
public readonly defaultEndpointSettings: DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `historyRetentionDuration`<sup>Required</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.historyRetentionDuration"></a>

```typescript
public readonly historyRetentionDuration: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.pgVersion"></a>

```typescript
public readonly pgVersion: number;
```

- *Type:* number

---

##### `syntheticStorageSizeBytes`<sup>Required</sup> <a name="syntheticStorageSizeBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.syntheticStorageSizeBytes"></a>

```typescript
public readonly syntheticStorageSizeBytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresProjectStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus">DataDatabricksPostgresProjectStatus</a>

---



