# `dataDatabricksPostgresCatalog` Submodule <a name="`dataDatabricksPostgresCatalog` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresCatalog <a name="DataDatabricksPostgresCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog databricks_postgres_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

new dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog(scope: Construct, id: string, config: DataDatabricksPostgresCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig">DataDatabricksPostgresCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig">DataDatabricksPostgresCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksPostgresCatalogProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isConstruct"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformElement"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksPostgresCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference">DataDatabricksPostgresCatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference">DataDatabricksPostgresCatalogSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference">DataDatabricksPostgresCatalogStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresCatalogProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference">DataDatabricksPostgresCatalogProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.spec"></a>

```typescript
public readonly spec: DataDatabricksPostgresCatalogSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference">DataDatabricksPostgresCatalogSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.status"></a>

```typescript
public readonly status: DataDatabricksPostgresCatalogStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference">DataDatabricksPostgresCatalogStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksPostgresCatalogProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresCatalogConfig <a name="DataDatabricksPostgresCatalogConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

const dataDatabricksPostgresCatalogConfig: dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#name DataDatabricksPostgresCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#provider_config DataDatabricksPostgresCatalog#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#name DataDatabricksPostgresCatalog#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksPostgresCatalogProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#provider_config DataDatabricksPostgresCatalog#provider_config}.

---

### DataDatabricksPostgresCatalogProviderConfig <a name="DataDatabricksPostgresCatalogProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

const dataDatabricksPostgresCatalogProviderConfig: dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#workspace_id DataDatabricksPostgresCatalog#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#workspace_id DataDatabricksPostgresCatalog#workspace_id}.

---

### DataDatabricksPostgresCatalogSpec <a name="DataDatabricksPostgresCatalogSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.Initializer"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

const dataDatabricksPostgresCatalogSpec: dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#postgres_database DataDatabricksPostgresCatalog#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#branch DataDatabricksPostgresCatalog#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.createDatabaseIfMissing">createDatabaseIfMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#create_database_if_missing DataDatabricksPostgresCatalog#create_database_if_missing}. |

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#postgres_database DataDatabricksPostgresCatalog#postgres_database}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#branch DataDatabricksPostgresCatalog#branch}.

---

##### `createDatabaseIfMissing`<sup>Optional</sup> <a name="createDatabaseIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.createDatabaseIfMissing"></a>

```typescript
public readonly createDatabaseIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#create_database_if_missing DataDatabricksPostgresCatalog#create_database_if_missing}.

---

### DataDatabricksPostgresCatalogStatus <a name="DataDatabricksPostgresCatalogStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus.Initializer"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

const dataDatabricksPostgresCatalogStatus: dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresCatalogProviderConfigOutputReference <a name="DataDatabricksPostgresCatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

new dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPostgresCatalogProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a>

---


### DataDatabricksPostgresCatalogSpecOutputReference <a name="DataDatabricksPostgresCatalogSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

new dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resetCreateDatabaseIfMissing">resetCreateDatabaseIfMissing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCreateDatabaseIfMissing` <a name="resetCreateDatabaseIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resetCreateDatabaseIfMissing"></a>

```typescript
public resetCreateDatabaseIfMissing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.createDatabaseIfMissingInput">createDatabaseIfMissingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.postgresDatabaseInput">postgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.createDatabaseIfMissing">createDatabaseIfMissing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec">DataDatabricksPostgresCatalogSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `createDatabaseIfMissingInput`<sup>Optional</sup> <a name="createDatabaseIfMissingInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.createDatabaseIfMissingInput"></a>

```typescript
public readonly createDatabaseIfMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `postgresDatabaseInput`<sup>Optional</sup> <a name="postgresDatabaseInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.postgresDatabaseInput"></a>

```typescript
public readonly postgresDatabaseInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `createDatabaseIfMissing`<sup>Required</sup> <a name="createDatabaseIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.createDatabaseIfMissing"></a>

```typescript
public readonly createDatabaseIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresCatalogSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec">DataDatabricksPostgresCatalogSpec</a>

---


### DataDatabricksPostgresCatalogStatusOutputReference <a name="DataDatabricksPostgresCatalogStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPostgresCatalog } from '@cdktn/provider-databricks'

new dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus">DataDatabricksPostgresCatalogStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.postgresDatabase"></a>

```typescript
public readonly postgresDatabase: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPostgresCatalogStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus">DataDatabricksPostgresCatalogStatus</a>

---



