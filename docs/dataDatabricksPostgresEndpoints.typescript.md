# `dataDatabricksPostgresEndpoints` Submodule <a name="`dataDatabricksPostgresEndpoints` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresEndpoints <a name="DataDatabricksPostgresEndpoints" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints databricks_postgres_endpoints}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints(scope: Construct, id: string, config: DataDatabricksPostgresEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig">DataDatabricksPostgresEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig">DataDatabricksPostgresEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresEndpointsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresEndpoints resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isConstruct"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresEndpoints resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList">DataDatabricksPostgresEndpointsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference">DataDatabricksPostgresEndpointsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.endpoints"></a>

```typescript
public readonly endpoints: DataDatabricksPostgresEndpointsEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList">DataDatabricksPostgresEndpointsEndpointsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresEndpointsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference">DataDatabricksPostgresEndpointsProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresEndpointsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresEndpointsConfig <a name="DataDatabricksPostgresEndpointsConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsConfig: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#parent DataDatabricksPostgresEndpoints#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#page_size DataDatabricksPostgresEndpoints#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#provider_config DataDatabricksPostgresEndpoints#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#parent DataDatabricksPostgresEndpoints#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#page_size DataDatabricksPostgresEndpoints#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresEndpointsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#provider_config DataDatabricksPostgresEndpoints#provider_config}.

---

### DataDatabricksPostgresEndpointsEndpoints <a name="DataDatabricksPostgresEndpointsEndpoints" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpoints: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#name DataDatabricksPostgresEndpoints#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#provider_config DataDatabricksPostgresEndpoints#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#name DataDatabricksPostgresEndpoints#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresEndpointsEndpointsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#provider_config DataDatabricksPostgresEndpoints#provider_config}.

---

### DataDatabricksPostgresEndpointsEndpointsProviderConfig <a name="DataDatabricksPostgresEndpointsEndpointsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpointsProviderConfig: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#workspace_id DataDatabricksPostgresEndpoints#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#workspace_id DataDatabricksPostgresEndpoints#workspace_id}.

---

### DataDatabricksPostgresEndpointsEndpointsSpec <a name="DataDatabricksPostgresEndpointsEndpointsSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpointsSpec: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#endpoint_type DataDatabricksPostgresEndpoints#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#autoscaling_limit_max_cu DataDatabricksPostgresEndpoints#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#autoscaling_limit_min_cu DataDatabricksPostgresEndpoints#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#disabled DataDatabricksPostgresEndpoints#disabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#group DataDatabricksPostgresEndpoints#group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#no_suspension DataDatabricksPostgresEndpoints#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#settings DataDatabricksPostgresEndpoints#settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#suspend_timeout_duration DataDatabricksPostgresEndpoints#suspend_timeout_duration}. |

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#endpoint_type DataDatabricksPostgresEndpoints#endpoint_type}.

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#autoscaling_limit_max_cu DataDatabricksPostgresEndpoints#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#autoscaling_limit_min_cu DataDatabricksPostgresEndpoints#autoscaling_limit_min_cu}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#disabled DataDatabricksPostgresEndpoints#disabled}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.group"></a>

```typescript
public readonly group: DataDatabricksPostgresEndpointsEndpointsSpecGroup;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#group DataDatabricksPostgresEndpoints#group}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#no_suspension DataDatabricksPostgresEndpoints#no_suspension}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.settings"></a>

```typescript
public readonly settings: DataDatabricksPostgresEndpointsEndpointsSpecSettings;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#settings DataDatabricksPostgresEndpoints#settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#suspend_timeout_duration DataDatabricksPostgresEndpoints#suspend_timeout_duration}.

---

### DataDatabricksPostgresEndpointsEndpointsSpecGroup <a name="DataDatabricksPostgresEndpointsEndpointsSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpointsSpecGroup: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#max DataDatabricksPostgresEndpoints#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#min DataDatabricksPostgresEndpoints#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#enable_readable_secondaries DataDatabricksPostgresEndpoints#enable_readable_secondaries}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#max DataDatabricksPostgresEndpoints#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#min DataDatabricksPostgresEndpoints#min}.

---

##### `enableReadableSecondaries`<sup>Optional</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#enable_readable_secondaries DataDatabricksPostgresEndpoints#enable_readable_secondaries}.

---

### DataDatabricksPostgresEndpointsEndpointsSpecSettings <a name="DataDatabricksPostgresEndpointsEndpointsSpecSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpointsSpecSettings: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#pg_settings DataDatabricksPostgresEndpoints#pg_settings}. |

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#pg_settings DataDatabricksPostgresEndpoints#pg_settings}.

---

### DataDatabricksPostgresEndpointsEndpointsStatus <a name="DataDatabricksPostgresEndpointsEndpointsStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpointsStatus: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus = { ... }
```


### DataDatabricksPostgresEndpointsEndpointsStatusGroup <a name="DataDatabricksPostgresEndpointsEndpointsStatusGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpointsStatusGroup: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#max DataDatabricksPostgresEndpoints#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#min DataDatabricksPostgresEndpoints#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#max DataDatabricksPostgresEndpoints#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#min DataDatabricksPostgresEndpoints#min}.

---

### DataDatabricksPostgresEndpointsEndpointsStatusHosts <a name="DataDatabricksPostgresEndpointsEndpointsStatusHosts" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpointsStatusHosts: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts = { ... }
```


### DataDatabricksPostgresEndpointsEndpointsStatusSettings <a name="DataDatabricksPostgresEndpointsEndpointsStatusSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsEndpointsStatusSettings: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#pg_settings DataDatabricksPostgresEndpoints#pg_settings}. |

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#pg_settings DataDatabricksPostgresEndpoints#pg_settings}.

---

### DataDatabricksPostgresEndpointsProviderConfig <a name="DataDatabricksPostgresEndpointsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

const dataDatabricksPostgresEndpointsProviderConfig: dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#workspace_id DataDatabricksPostgresEndpoints#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_endpoints#workspace_id DataDatabricksPostgresEndpoints#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresEndpointsEndpointsList <a name="DataDatabricksPostgresEndpointsEndpointsList" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.get"></a>

```typescript
public get(index: number): DataDatabricksPostgresEndpointsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints">DataDatabricksPostgresEndpointsEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresEndpointsEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints">DataDatabricksPostgresEndpointsEndpoints</a>[]

---


### DataDatabricksPostgresEndpointsEndpointsOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresEndpointsEndpointsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference">DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints">DataDatabricksPostgresEndpointsEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference">DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresEndpointsEndpointsSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresEndpointsEndpointsStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresEndpointsEndpointsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresEndpointsEndpoints;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints">DataDatabricksPostgresEndpointsEndpoints</a>

---


### DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresEndpointsEndpointsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a>

---


### DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resetEnableReadableSecondaries">resetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableReadableSecondaries` <a name="resetEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```typescript
public resetEnableReadableSecondaries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.enableReadableSecondariesInput">enableReadableSecondariesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableReadableSecondariesInput`<sup>Optional</sup> <a name="enableReadableSecondariesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```typescript
public readonly enableReadableSecondariesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresEndpointsEndpointsSpecGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a>

---


### DataDatabricksPostgresEndpointsEndpointsSpecOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroup` <a name="putGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putGroup"></a>

```typescript
public putGroup(value: DataDatabricksPostgresEndpointsEndpointsSpecGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a>

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putSettings"></a>

```typescript
public putSettings(value: DataDatabricksPostgresEndpointsEndpointsSpecSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a>

---

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```typescript
public resetAutoscalingLimitMaxCu(): void
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```typescript
public resetAutoscalingLimitMinCu(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetNoSuspension"></a>

```typescript
public resetNoSuspension(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetSuspendTimeoutDuration"></a>

```typescript
public resetSuspendTimeoutDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.groupInput">groupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.noSuspension">noSuspension</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec">DataDatabricksPostgresEndpointsEndpointsSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.group"></a>

```typescript
public readonly group: DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.settings"></a>

```typescript
public readonly settings: DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference</a>

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```typescript
public readonly autoscalingLimitMaxCuInput: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```typescript
public readonly autoscalingLimitMinCuInput: number;
```

- *Type:* number

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | DataDatabricksPostgresEndpointsEndpointsSpecGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a>

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.noSuspensionInput"></a>

```typescript
public readonly noSuspensionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | DataDatabricksPostgresEndpointsEndpointsSpecSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a>

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```typescript
public readonly suspendTimeoutDurationInput: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.noSuspension"></a>

```typescript
public readonly noSuspension: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresEndpointsEndpointsSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec">DataDatabricksPostgresEndpointsEndpointsSpec</a>

---


### DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resetPgSettings"></a>

```typescript
public resetPgSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.pgSettingsInput"></a>

```typescript
public readonly pgSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresEndpointsEndpointsSpecSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a>

---


### DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup">DataDatabricksPostgresEndpointsEndpointsStatusGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresEndpointsEndpointsStatusGroup;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup">DataDatabricksPostgresEndpointsEndpointsStatusGroup</a>

---


### DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.readOnlyHost">readOnlyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts">DataDatabricksPostgresEndpointsEndpointsStatusHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `readOnlyHost`<sup>Required</sup> <a name="readOnlyHost" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.readOnlyHost"></a>

```typescript
public readonly readOnlyHost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresEndpointsEndpointsStatusHosts;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts">DataDatabricksPostgresEndpointsEndpointsStatusHosts</a>

---


### DataDatabricksPostgresEndpointsEndpointsStatusOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.currentState">currentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.hosts">hosts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.pendingState">pendingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus">DataDatabricksPostgresEndpointsEndpointsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.autoscalingLimitMaxCu"></a>

```typescript
public readonly autoscalingLimitMaxCu: number;
```

- *Type:* number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.autoscalingLimitMinCu"></a>

```typescript
public readonly autoscalingLimitMinCu: number;
```

- *Type:* number

---

##### `currentState`<sup>Required</sup> <a name="currentState" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.currentState"></a>

```typescript
public readonly currentState: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.group"></a>

```typescript
public readonly group: DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.hosts"></a>

```typescript
public readonly hosts: DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference</a>

---

##### `pendingState`<sup>Required</sup> <a name="pendingState" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.pendingState"></a>

```typescript
public readonly pendingState: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.settings"></a>

```typescript
public readonly settings: DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference</a>

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.suspendTimeoutDuration"></a>

```typescript
public readonly suspendTimeoutDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresEndpointsEndpointsStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus">DataDatabricksPostgresEndpointsEndpointsStatus</a>

---


### DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resetPgSettings"></a>

```typescript
public resetPgSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings">DataDatabricksPostgresEndpointsEndpointsStatusSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.pgSettingsInput"></a>

```typescript
public readonly pgSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.pgSettings"></a>

```typescript
public readonly pgSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresEndpointsEndpointsStatusSettings;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings">DataDatabricksPostgresEndpointsEndpointsStatusSettings</a>

---


### DataDatabricksPostgresEndpointsProviderConfigOutputReference <a name="DataDatabricksPostgresEndpointsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresEndpoints } from '@cdktn/provider-databricks'

new dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresEndpointsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a>

---



