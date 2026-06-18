# `dataDatabricksMetastore` Submodule <a name="`dataDatabricksMetastore` Submodule" id="@cdktn/provider-databricks.dataDatabricksMetastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMetastore <a name="DataDatabricksMetastore" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore databricks_metastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer"></a>

```typescript
import { dataDatabricksMetastore } from '@cdktn/provider-databricks'

new dataDatabricksMetastore.DataDatabricksMetastore(scope: Construct, id: string, config?: DataDatabricksMetastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig">DataDatabricksMetastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig">DataDatabricksMetastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo">putMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreInfo">resetMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetastoreInfo` <a name="putMetastoreInfo" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo"></a>

```typescript
public putMetastoreInfo(value: DataDatabricksMetastoreMetastoreInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetMetastoreInfo` <a name="resetMetastoreInfo" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreInfo"></a>

```typescript
public resetMetastoreInfo(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMetastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct"></a>

```typescript
import { dataDatabricksMetastore } from '@cdktn/provider-databricks'

dataDatabricksMetastore.DataDatabricksMetastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement"></a>

```typescript
import { dataDatabricksMetastore } from '@cdktn/provider-databricks'

dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMetastore } from '@cdktn/provider-databricks'

dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport"></a>

```typescript
import { dataDatabricksMetastore } from '@cdktn/provider-databricks'

dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksMetastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMetastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMetastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMetastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfo">metastoreInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference">DataDatabricksMetastoreMetastoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfoInput">metastoreInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `metastoreInfo`<sup>Required</sup> <a name="metastoreInfo" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfo"></a>

```typescript
public readonly metastoreInfo: DataDatabricksMetastoreMetastoreInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference">DataDatabricksMetastoreMetastoreInfoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `metastoreInfoInput`<sup>Optional</sup> <a name="metastoreInfoInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfoInput"></a>

```typescript
public readonly metastoreInfoInput: DataDatabricksMetastoreMetastoreInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMetastoreConfig <a name="DataDatabricksMetastoreConfig" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.Initializer"></a>

```typescript
import { dataDatabricksMetastore } from '@cdktn/provider-databricks'

const dataDatabricksMetastoreConfig: dataDatabricksMetastore.DataDatabricksMetastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreInfo">metastoreInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | metastore_info block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}.

---

##### `metastoreInfo`<sup>Optional</sup> <a name="metastoreInfo" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreInfo"></a>

```typescript
public readonly metastoreInfo: DataDatabricksMetastoreMetastoreInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#metastore_info DataDatabricksMetastore#metastore_info}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}.

---

### DataDatabricksMetastoreMetastoreInfo <a name="DataDatabricksMetastoreMetastoreInfo" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.Initializer"></a>

```typescript
import { dataDatabricksMetastore } from '@cdktn/provider-databricks'

const dataDatabricksMetastoreMetastoreInfo: dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.cloud">cloud</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#cloud DataDatabricksMetastore#cloud}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdAt">createdAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#created_at DataDatabricksMetastore#created_at}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#created_by DataDatabricksMetastore#created_by}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#default_data_access_config_id DataDatabricksMetastore#default_data_access_config_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#delta_sharing_organization_name DataDatabricksMetastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksMetastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingScope">deltaSharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#delta_sharing_scope DataDatabricksMetastore#delta_sharing_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#external_access_enabled DataDatabricksMetastore#external_access_enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#global_metastore_id DataDatabricksMetastore#global_metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#owner DataDatabricksMetastore#owner}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.privilegeModelVersion">privilegeModelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#privilege_model_version DataDatabricksMetastore#privilege_model_version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRoot">storageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#storage_root DataDatabricksMetastore#storage_root}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialId">storageRootCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#storage_root_credential_id DataDatabricksMetastore#storage_root_credential_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialName">storageRootCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#storage_root_credential_name DataDatabricksMetastore#storage_root_credential_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedAt">updatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#updated_at DataDatabricksMetastore#updated_at}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedBy">updatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#updated_by DataDatabricksMetastore#updated_by}. |

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#cloud DataDatabricksMetastore#cloud}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#created_at DataDatabricksMetastore#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#created_by DataDatabricksMetastore#created_by}.

---

##### `defaultDataAccessConfigId`<sup>Optional</sup> <a name="defaultDataAccessConfigId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.defaultDataAccessConfigId"></a>

```typescript
public readonly defaultDataAccessConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#default_data_access_config_id DataDatabricksMetastore#default_data_access_config_id}.

---

##### `deltaSharingOrganizationName`<sup>Optional</sup> <a name="deltaSharingOrganizationName" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingOrganizationName"></a>

```typescript
public readonly deltaSharingOrganizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#delta_sharing_organization_name DataDatabricksMetastore#delta_sharing_organization_name}.

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```typescript
public readonly deltaSharingRecipientTokenLifetimeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksMetastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `deltaSharingScope`<sup>Optional</sup> <a name="deltaSharingScope" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingScope"></a>

```typescript
public readonly deltaSharingScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#delta_sharing_scope DataDatabricksMetastore#delta_sharing_scope}.

---

##### `externalAccessEnabled`<sup>Optional</sup> <a name="externalAccessEnabled" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.externalAccessEnabled"></a>

```typescript
public readonly externalAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#external_access_enabled DataDatabricksMetastore#external_access_enabled}.

---

##### `globalMetastoreId`<sup>Optional</sup> <a name="globalMetastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#global_metastore_id DataDatabricksMetastore#global_metastore_id}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#owner DataDatabricksMetastore#owner}.

---

##### `privilegeModelVersion`<sup>Optional</sup> <a name="privilegeModelVersion" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.privilegeModelVersion"></a>

```typescript
public readonly privilegeModelVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#privilege_model_version DataDatabricksMetastore#privilege_model_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#storage_root DataDatabricksMetastore#storage_root}.

---

##### `storageRootCredentialId`<sup>Optional</sup> <a name="storageRootCredentialId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialId"></a>

```typescript
public readonly storageRootCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#storage_root_credential_id DataDatabricksMetastore#storage_root_credential_id}.

---

##### `storageRootCredentialName`<sup>Optional</sup> <a name="storageRootCredentialName" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialName"></a>

```typescript
public readonly storageRootCredentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#storage_root_credential_name DataDatabricksMetastore#storage_root_credential_name}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#updated_at DataDatabricksMetastore#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/metastore#updated_by DataDatabricksMetastore#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMetastoreMetastoreInfoOutputReference <a name="DataDatabricksMetastoreMetastoreInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMetastore } from '@cdktn/provider-databricks'

new dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId">resetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName">resetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds">resetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope">resetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled">resetExternalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId">resetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion">resetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId">resetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName">resetStorageRootCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloud` <a name="resetCloud" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCloud"></a>

```typescript
public resetCloud(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetDefaultDataAccessConfigId` <a name="resetDefaultDataAccessConfigId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId"></a>

```typescript
public resetDefaultDataAccessConfigId(): void
```

##### `resetDeltaSharingOrganizationName` <a name="resetDeltaSharingOrganizationName" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName"></a>

```typescript
public resetDeltaSharingOrganizationName(): void
```

##### `resetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="resetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```typescript
public resetDeltaSharingRecipientTokenLifetimeInSeconds(): void
```

##### `resetDeltaSharingScope` <a name="resetDeltaSharingScope" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope"></a>

```typescript
public resetDeltaSharingScope(): void
```

##### `resetExternalAccessEnabled` <a name="resetExternalAccessEnabled" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled"></a>

```typescript
public resetExternalAccessEnabled(): void
```

##### `resetGlobalMetastoreId` <a name="resetGlobalMetastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId"></a>

```typescript
public resetGlobalMetastoreId(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetPrivilegeModelVersion` <a name="resetPrivilegeModelVersion" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion"></a>

```typescript
public resetPrivilegeModelVersion(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRoot"></a>

```typescript
public resetStorageRoot(): void
```

##### `resetStorageRootCredentialId` <a name="resetStorageRootCredentialId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId"></a>

```typescript
public resetStorageRootCredentialId(): void
```

##### `resetStorageRootCredentialName` <a name="resetStorageRootCredentialName" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName"></a>

```typescript
public resetStorageRootCredentialName(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedBy"></a>

```typescript
public resetUpdatedBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloudInput">cloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput">defaultDataAccessConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput">deltaSharingOrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput">deltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput">deltaSharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput">externalAccessEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput">globalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput">privilegeModelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput">storageRootCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput">storageRootCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootInput">storageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScope">deltaSharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion">privilegeModelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRoot">storageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId">storageRootCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName">storageRootCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloudInput"></a>

```typescript
public readonly cloudInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: number;
```

- *Type:* number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `defaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="defaultDataAccessConfigIdInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput"></a>

```typescript
public readonly defaultDataAccessConfigIdInput: string;
```

- *Type:* string

---

##### `deltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="deltaSharingOrganizationNameInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput"></a>

```typescript
public readonly deltaSharingOrganizationNameInput: string;
```

- *Type:* string

---

##### `deltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```typescript
public readonly deltaSharingRecipientTokenLifetimeInSecondsInput: number;
```

- *Type:* number

---

##### `deltaSharingScopeInput`<sup>Optional</sup> <a name="deltaSharingScopeInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput"></a>

```typescript
public readonly deltaSharingScopeInput: string;
```

- *Type:* string

---

##### `externalAccessEnabledInput`<sup>Optional</sup> <a name="externalAccessEnabledInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput"></a>

```typescript
public readonly externalAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `globalMetastoreIdInput`<sup>Optional</sup> <a name="globalMetastoreIdInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput"></a>

```typescript
public readonly globalMetastoreIdInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `privilegeModelVersionInput`<sup>Optional</sup> <a name="privilegeModelVersionInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput"></a>

```typescript
public readonly privilegeModelVersionInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `storageRootCredentialIdInput`<sup>Optional</sup> <a name="storageRootCredentialIdInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput"></a>

```typescript
public readonly storageRootCredentialIdInput: string;
```

- *Type:* string

---

##### `storageRootCredentialNameInput`<sup>Optional</sup> <a name="storageRootCredentialNameInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput"></a>

```typescript
public readonly storageRootCredentialNameInput: string;
```

- *Type:* string

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootInput"></a>

```typescript
public readonly storageRootInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: number;
```

- *Type:* number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedByInput"></a>

```typescript
public readonly updatedByInput: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `defaultDataAccessConfigId`<sup>Required</sup> <a name="defaultDataAccessConfigId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId"></a>

```typescript
public readonly defaultDataAccessConfigId: string;
```

- *Type:* string

---

##### `deltaSharingOrganizationName`<sup>Required</sup> <a name="deltaSharingOrganizationName" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName"></a>

```typescript
public readonly deltaSharingOrganizationName: string;
```

- *Type:* string

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```typescript
public readonly deltaSharingRecipientTokenLifetimeInSeconds: number;
```

- *Type:* number

---

##### `deltaSharingScope`<sup>Required</sup> <a name="deltaSharingScope" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScope"></a>

```typescript
public readonly deltaSharingScope: string;
```

- *Type:* string

---

##### `externalAccessEnabled`<sup>Required</sup> <a name="externalAccessEnabled" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled"></a>

```typescript
public readonly externalAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `privilegeModelVersion`<sup>Required</sup> <a name="privilegeModelVersion" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion"></a>

```typescript
public readonly privilegeModelVersion: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

---

##### `storageRootCredentialId`<sup>Required</sup> <a name="storageRootCredentialId" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId"></a>

```typescript
public readonly storageRootCredentialId: string;
```

- *Type:* string

---

##### `storageRootCredentialName`<sup>Required</sup> <a name="storageRootCredentialName" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName"></a>

```typescript
public readonly storageRootCredentialName: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMetastoreMetastoreInfo;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---



