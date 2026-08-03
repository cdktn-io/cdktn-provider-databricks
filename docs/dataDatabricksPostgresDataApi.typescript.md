# `dataDatabricksPostgresDataApi` Submodule <a name="`dataDatabricksPostgresDataApi` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresDataApi <a name="DataDatabricksPostgresDataApi" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api databricks_postgres_data_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

new dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi(scope: Construct, id: string, config: DataDatabricksPostgresDataApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig">DataDatabricksPostgresDataApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig">DataDatabricksPostgresDataApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresDataApiProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresDataApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresDataApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresDataApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference">DataDatabricksPostgresDataApiProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference">DataDatabricksPostgresDataApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference">DataDatabricksPostgresDataApiStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresDataApiProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference">DataDatabricksPostgresDataApiProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresDataApiSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference">DataDatabricksPostgresDataApiSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresDataApiStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference">DataDatabricksPostgresDataApiStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresDataApiProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresDataApiConfig <a name="DataDatabricksPostgresDataApiConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

const dataDatabricksPostgresDataApiConfig: dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresDataApiProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}.

---

### DataDatabricksPostgresDataApiProviderConfig <a name="DataDatabricksPostgresDataApiProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

const dataDatabricksPostgresDataApiProviderConfig: dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}.

---

### DataDatabricksPostgresDataApiSpec <a name="DataDatabricksPostgresDataApiSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

const dataDatabricksPostgresDataApiSpec: dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbMaxRows">dbMaxRows</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbSchemas">dbSchemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.openapiMode">openapiMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}. |

---

##### `dbAggregatesEnabled`<sup>Optional</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbAggregatesEnabled"></a>

```typescript
public readonly dbAggregatesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}.

---

##### `dbExtraSearchPath`<sup>Optional</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbExtraSearchPath"></a>

```typescript
public readonly dbExtraSearchPath: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}.

---

##### `dbMaxRows`<sup>Optional</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbMaxRows"></a>

```typescript
public readonly dbMaxRows: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}.

---

##### `dbSchemas`<sup>Optional</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbSchemas"></a>

```typescript
public readonly dbSchemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}.

---

##### `jwtCacheMaxLifetime`<sup>Optional</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtCacheMaxLifetime"></a>

```typescript
public readonly jwtCacheMaxLifetime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}.

---

##### `jwtRoleClaimKey`<sup>Optional</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtRoleClaimKey"></a>

```typescript
public readonly jwtRoleClaimKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}.

---

##### `openapiMode`<sup>Optional</sup> <a name="openapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.openapiMode"></a>

```typescript
public readonly openapiMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}.

---

##### `serverCorsAllowedOrigins`<sup>Optional</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverCorsAllowedOrigins"></a>

```typescript
public readonly serverCorsAllowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}.

---

##### `serverTimingEnabled`<sup>Optional</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverTimingEnabled"></a>

```typescript
public readonly serverTimingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}.

---

### DataDatabricksPostgresDataApiStatus <a name="DataDatabricksPostgresDataApiStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

const dataDatabricksPostgresDataApiStatus: dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresDataApiProviderConfigOutputReference <a name="DataDatabricksPostgresDataApiProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

new dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresDataApiProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---


### DataDatabricksPostgresDataApiSpecOutputReference <a name="DataDatabricksPostgresDataApiSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

new dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbAggregatesEnabled">resetDbAggregatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbExtraSearchPath">resetDbExtraSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbMaxRows">resetDbMaxRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbSchemas">resetDbSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime">resetJwtCacheMaxLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtRoleClaimKey">resetJwtRoleClaimKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetOpenapiMode">resetOpenapiMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins">resetServerCorsAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerTimingEnabled">resetServerTimingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbAggregatesEnabled` <a name="resetDbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbAggregatesEnabled"></a>

```typescript
public resetDbAggregatesEnabled(): void
```

##### `resetDbExtraSearchPath` <a name="resetDbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbExtraSearchPath"></a>

```typescript
public resetDbExtraSearchPath(): void
```

##### `resetDbMaxRows` <a name="resetDbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbMaxRows"></a>

```typescript
public resetDbMaxRows(): void
```

##### `resetDbSchemas` <a name="resetDbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbSchemas"></a>

```typescript
public resetDbSchemas(): void
```

##### `resetJwtCacheMaxLifetime` <a name="resetJwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime"></a>

```typescript
public resetJwtCacheMaxLifetime(): void
```

##### `resetJwtRoleClaimKey` <a name="resetJwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtRoleClaimKey"></a>

```typescript
public resetJwtRoleClaimKey(): void
```

##### `resetOpenapiMode` <a name="resetOpenapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetOpenapiMode"></a>

```typescript
public resetOpenapiMode(): void
```

##### `resetServerCorsAllowedOrigins` <a name="resetServerCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins"></a>

```typescript
public resetServerCorsAllowedOrigins(): void
```

##### `resetServerTimingEnabled` <a name="resetServerTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerTimingEnabled"></a>

```typescript
public resetServerTimingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput">dbAggregatesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput">dbExtraSearchPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRowsInput">dbMaxRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemasInput">dbSchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput">jwtCacheMaxLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput">jwtRoleClaimKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiModeInput">openapiModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput">serverCorsAllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabledInput">serverTimingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRows">dbMaxRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemas">dbSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiMode">openapiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec">DataDatabricksPostgresDataApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbAggregatesEnabledInput`<sup>Optional</sup> <a name="dbAggregatesEnabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput"></a>

```typescript
public readonly dbAggregatesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbExtraSearchPathInput`<sup>Optional</sup> <a name="dbExtraSearchPathInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput"></a>

```typescript
public readonly dbExtraSearchPathInput: string[];
```

- *Type:* string[]

---

##### `dbMaxRowsInput`<sup>Optional</sup> <a name="dbMaxRowsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRowsInput"></a>

```typescript
public readonly dbMaxRowsInput: number;
```

- *Type:* number

---

##### `dbSchemasInput`<sup>Optional</sup> <a name="dbSchemasInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemasInput"></a>

```typescript
public readonly dbSchemasInput: string[];
```

- *Type:* string[]

---

##### `jwtCacheMaxLifetimeInput`<sup>Optional</sup> <a name="jwtCacheMaxLifetimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput"></a>

```typescript
public readonly jwtCacheMaxLifetimeInput: string;
```

- *Type:* string

---

##### `jwtRoleClaimKeyInput`<sup>Optional</sup> <a name="jwtRoleClaimKeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput"></a>

```typescript
public readonly jwtRoleClaimKeyInput: string;
```

- *Type:* string

---

##### `openapiModeInput`<sup>Optional</sup> <a name="openapiModeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiModeInput"></a>

```typescript
public readonly openapiModeInput: string;
```

- *Type:* string

---

##### `serverCorsAllowedOriginsInput`<sup>Optional</sup> <a name="serverCorsAllowedOriginsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput"></a>

```typescript
public readonly serverCorsAllowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `serverTimingEnabledInput`<sup>Optional</sup> <a name="serverTimingEnabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabledInput"></a>

```typescript
public readonly serverTimingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbAggregatesEnabled`<sup>Required</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabled"></a>

```typescript
public readonly dbAggregatesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbExtraSearchPath`<sup>Required</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPath"></a>

```typescript
public readonly dbExtraSearchPath: string[];
```

- *Type:* string[]

---

##### `dbMaxRows`<sup>Required</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRows"></a>

```typescript
public readonly dbMaxRows: number;
```

- *Type:* number

---

##### `dbSchemas`<sup>Required</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemas"></a>

```typescript
public readonly dbSchemas: string[];
```

- *Type:* string[]

---

##### `jwtCacheMaxLifetime`<sup>Required</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime"></a>

```typescript
public readonly jwtCacheMaxLifetime: string;
```

- *Type:* string

---

##### `jwtRoleClaimKey`<sup>Required</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKey"></a>

```typescript
public readonly jwtRoleClaimKey: string;
```

- *Type:* string

---

##### `openapiMode`<sup>Required</sup> <a name="openapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiMode"></a>

```typescript
public readonly openapiMode: string;
```

- *Type:* string

---

##### `serverCorsAllowedOrigins`<sup>Required</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins"></a>

```typescript
public readonly serverCorsAllowedOrigins: string[];
```

- *Type:* string[]

---

##### `serverTimingEnabled`<sup>Required</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabled"></a>

```typescript
public readonly serverTimingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresDataApiSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec">DataDatabricksPostgresDataApiSpec</a>

---


### DataDatabricksPostgresDataApiStatusOutputReference <a name="DataDatabricksPostgresDataApiStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresDataApi } from '@cdktn/provider-databricks'

new dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.availableSchemas">availableSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbMaxRows">dbMaxRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbSchemas">dbSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.openapiMode">openapiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus">DataDatabricksPostgresDataApiStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableSchemas`<sup>Required</sup> <a name="availableSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.availableSchemas"></a>

```typescript
public readonly availableSchemas: string[];
```

- *Type:* string[]

---

##### `dbAggregatesEnabled`<sup>Required</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbAggregatesEnabled"></a>

```typescript
public readonly dbAggregatesEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dbExtraSearchPath`<sup>Required</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbExtraSearchPath"></a>

```typescript
public readonly dbExtraSearchPath: string[];
```

- *Type:* string[]

---

##### `dbMaxRows`<sup>Required</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbMaxRows"></a>

```typescript
public readonly dbMaxRows: number;
```

- *Type:* number

---

##### `dbSchemas`<sup>Required</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbSchemas"></a>

```typescript
public readonly dbSchemas: string[];
```

- *Type:* string[]

---

##### `jwtCacheMaxLifetime`<sup>Required</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime"></a>

```typescript
public readonly jwtCacheMaxLifetime: string;
```

- *Type:* string

---

##### `jwtRoleClaimKey`<sup>Required</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtRoleClaimKey"></a>

```typescript
public readonly jwtRoleClaimKey: string;
```

- *Type:* string

---

##### `openapiMode`<sup>Required</sup> <a name="openapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.openapiMode"></a>

```typescript
public readonly openapiMode: string;
```

- *Type:* string

---

##### `serverCorsAllowedOrigins`<sup>Required</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins"></a>

```typescript
public readonly serverCorsAllowedOrigins: string[];
```

- *Type:* string[]

---

##### `serverTimingEnabled`<sup>Required</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverTimingEnabled"></a>

```typescript
public readonly serverTimingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresDataApiStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus">DataDatabricksPostgresDataApiStatus</a>

---



