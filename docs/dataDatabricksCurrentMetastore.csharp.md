# `dataDatabricksCurrentMetastore` Submodule <a name="`dataDatabricksCurrentMetastore` Submodule" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCurrentMetastore <a name="DataDatabricksCurrentMetastore" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore databricks_current_metastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksCurrentMetastore(Construct Scope, string Id, DataDatabricksCurrentMetastoreConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig">DataDatabricksCurrentMetastoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig">DataDatabricksCurrentMetastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo">PutMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetMetastoreInfo">ResetMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetastoreInfo` <a name="PutMetastoreInfo" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo"></a>

```csharp
private void PutMetastoreInfo(DataDatabricksCurrentMetastoreMetastoreInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksCurrentMetastoreProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig">DataDatabricksCurrentMetastoreProviderConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastoreInfo` <a name="ResetMetastoreInfo" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetMetastoreInfo"></a>

```csharp
private void ResetMetastoreInfo()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksCurrentMetastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksCurrentMetastore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksCurrentMetastore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksCurrentMetastore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksCurrentMetastore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksCurrentMetastore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCurrentMetastore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCurrentMetastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksCurrentMetastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfo">MetastoreInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference">DataDatabricksCurrentMetastoreMetastoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference">DataDatabricksCurrentMetastoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfoInput">MetastoreInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig">DataDatabricksCurrentMetastoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `MetastoreInfo`<sup>Required</sup> <a name="MetastoreInfo" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfo"></a>

```csharp
public DataDatabricksCurrentMetastoreMetastoreInfoOutputReference MetastoreInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference">DataDatabricksCurrentMetastoreMetastoreInfoOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.providerConfig"></a>

```csharp
public DataDatabricksCurrentMetastoreProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference">DataDatabricksCurrentMetastoreProviderConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreInfoInput`<sup>Optional</sup> <a name="MetastoreInfoInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfoInput"></a>

```csharp
public DataDatabricksCurrentMetastoreMetastoreInfo MetastoreInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.providerConfigInput"></a>

```csharp
public DataDatabricksCurrentMetastoreProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig">DataDatabricksCurrentMetastoreProviderConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCurrentMetastoreConfig <a name="DataDatabricksCurrentMetastoreConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksCurrentMetastoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataDatabricksCurrentMetastoreMetastoreInfo MetastoreInfo = null,
    DataDatabricksCurrentMetastoreProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.metastoreInfo">MetastoreInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | metastore_info block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig">DataDatabricksCurrentMetastoreProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreInfo`<sup>Optional</sup> <a name="MetastoreInfo" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.metastoreInfo"></a>

```csharp
public DataDatabricksCurrentMetastoreMetastoreInfo MetastoreInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#metastore_info DataDatabricksCurrentMetastore#metastore_info}

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.providerConfig"></a>

```csharp
public DataDatabricksCurrentMetastoreProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig">DataDatabricksCurrentMetastoreProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#provider_config DataDatabricksCurrentMetastore#provider_config}

---

### DataDatabricksCurrentMetastoreMetastoreInfo <a name="DataDatabricksCurrentMetastoreMetastoreInfo" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksCurrentMetastoreMetastoreInfo {
    string Cloud = null,
    double CreatedAt = null,
    string CreatedBy = null,
    string DefaultDataAccessConfigId = null,
    string DeltaSharingOrganizationName = null,
    double DeltaSharingRecipientTokenLifetimeInSeconds = null,
    string DeltaSharingScope = null,
    bool|IResolvable ExternalAccessEnabled = null,
    string GlobalMetastoreId = null,
    string MetastoreId = null,
    string Name = null,
    string Owner = null,
    string PrivilegeModelVersion = null,
    string Region = null,
    string StorageRoot = null,
    string StorageRootCredentialId = null,
    string StorageRootCredentialName = null,
    double UpdatedAt = null,
    string UpdatedBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.cloud">Cloud</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#cloud DataDatabricksCurrentMetastore#cloud}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#created_at DataDatabricksCurrentMetastore#created_at}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#created_by DataDatabricksCurrentMetastore#created_by}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#default_data_access_config_id DataDatabricksCurrentMetastore#default_data_access_config_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#delta_sharing_organization_name DataDatabricksCurrentMetastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksCurrentMetastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#delta_sharing_scope DataDatabricksCurrentMetastore#delta_sharing_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#external_access_enabled DataDatabricksCurrentMetastore#external_access_enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#global_metastore_id DataDatabricksCurrentMetastore#global_metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#metastore_id DataDatabricksCurrentMetastore#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#name DataDatabricksCurrentMetastore#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#owner DataDatabricksCurrentMetastore#owner}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#privilege_model_version DataDatabricksCurrentMetastore#privilege_model_version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#region DataDatabricksCurrentMetastore#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRoot">StorageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#storage_root DataDatabricksCurrentMetastore#storage_root}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#storage_root_credential_id DataDatabricksCurrentMetastore#storage_root_credential_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#storage_root_credential_name DataDatabricksCurrentMetastore#storage_root_credential_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#updated_at DataDatabricksCurrentMetastore#updated_at}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#updated_by DataDatabricksCurrentMetastore#updated_by}. |

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.cloud"></a>

```csharp
public string Cloud { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#cloud DataDatabricksCurrentMetastore#cloud}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#created_at DataDatabricksCurrentMetastore#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#created_by DataDatabricksCurrentMetastore#created_by}.

---

##### `DefaultDataAccessConfigId`<sup>Optional</sup> <a name="DefaultDataAccessConfigId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.defaultDataAccessConfigId"></a>

```csharp
public string DefaultDataAccessConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#default_data_access_config_id DataDatabricksCurrentMetastore#default_data_access_config_id}.

---

##### `DeltaSharingOrganizationName`<sup>Optional</sup> <a name="DeltaSharingOrganizationName" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingOrganizationName"></a>

```csharp
public string DeltaSharingOrganizationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#delta_sharing_organization_name DataDatabricksCurrentMetastore#delta_sharing_organization_name}.

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksCurrentMetastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `DeltaSharingScope`<sup>Optional</sup> <a name="DeltaSharingScope" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingScope"></a>

```csharp
public string DeltaSharingScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#delta_sharing_scope DataDatabricksCurrentMetastore#delta_sharing_scope}.

---

##### `ExternalAccessEnabled`<sup>Optional</sup> <a name="ExternalAccessEnabled" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.externalAccessEnabled"></a>

```csharp
public bool|IResolvable ExternalAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#external_access_enabled DataDatabricksCurrentMetastore#external_access_enabled}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#global_metastore_id DataDatabricksCurrentMetastore#global_metastore_id}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#metastore_id DataDatabricksCurrentMetastore#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#name DataDatabricksCurrentMetastore#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#owner DataDatabricksCurrentMetastore#owner}.

---

##### `PrivilegeModelVersion`<sup>Optional</sup> <a name="PrivilegeModelVersion" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.privilegeModelVersion"></a>

```csharp
public string PrivilegeModelVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#privilege_model_version DataDatabricksCurrentMetastore#privilege_model_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#region DataDatabricksCurrentMetastore#region}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRoot"></a>

```csharp
public string StorageRoot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#storage_root DataDatabricksCurrentMetastore#storage_root}.

---

##### `StorageRootCredentialId`<sup>Optional</sup> <a name="StorageRootCredentialId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialId"></a>

```csharp
public string StorageRootCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#storage_root_credential_id DataDatabricksCurrentMetastore#storage_root_credential_id}.

---

##### `StorageRootCredentialName`<sup>Optional</sup> <a name="StorageRootCredentialName" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialName"></a>

```csharp
public string StorageRootCredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#storage_root_credential_name DataDatabricksCurrentMetastore#storage_root_credential_name}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#updated_at DataDatabricksCurrentMetastore#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#updated_by DataDatabricksCurrentMetastore#updated_by}.

---

### DataDatabricksCurrentMetastoreProviderConfig <a name="DataDatabricksCurrentMetastoreProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksCurrentMetastoreProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#workspace_id DataDatabricksCurrentMetastore#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/current_metastore#workspace_id DataDatabricksCurrentMetastore#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCurrentMetastoreMetastoreInfoOutputReference <a name="DataDatabricksCurrentMetastoreMetastoreInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksCurrentMetastoreMetastoreInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId">ResetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName">ResetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds">ResetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope">ResetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled">ResetExternalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion">ResetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId">ResetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName">ResetStorageRootCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloud` <a name="ResetCloud" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCloud"></a>

```csharp
private void ResetCloud()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetDefaultDataAccessConfigId` <a name="ResetDefaultDataAccessConfigId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId"></a>

```csharp
private void ResetDefaultDataAccessConfigId()
```

##### `ResetDeltaSharingOrganizationName` <a name="ResetDeltaSharingOrganizationName" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName"></a>

```csharp
private void ResetDeltaSharingOrganizationName()
```

##### `ResetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="ResetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
private void ResetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `ResetDeltaSharingScope` <a name="ResetDeltaSharingScope" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope"></a>

```csharp
private void ResetDeltaSharingScope()
```

##### `ResetExternalAccessEnabled` <a name="ResetExternalAccessEnabled" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled"></a>

```csharp
private void ResetExternalAccessEnabled()
```

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId"></a>

```csharp
private void ResetGlobalMetastoreId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetPrivilegeModelVersion` <a name="ResetPrivilegeModelVersion" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion"></a>

```csharp
private void ResetPrivilegeModelVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRoot"></a>

```csharp
private void ResetStorageRoot()
```

##### `ResetStorageRootCredentialId` <a name="ResetStorageRootCredentialId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId"></a>

```csharp
private void ResetStorageRootCredentialId()
```

##### `ResetStorageRootCredentialName` <a name="ResetStorageRootCredentialName" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName"></a>

```csharp
private void ResetStorageRootCredentialName()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloudInput">CloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput">DefaultDataAccessConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput">DeltaSharingOrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput">DeltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput">DeltaSharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput">ExternalAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput">PrivilegeModelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput">StorageRootCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput">StorageRootCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootInput">StorageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloud">Cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRoot">StorageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloudInput"></a>

```csharp
public string CloudInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `DefaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="DefaultDataAccessConfigIdInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput"></a>

```csharp
public string DefaultDataAccessConfigIdInput { get; }
```

- *Type:* string

---

##### `DeltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="DeltaSharingOrganizationNameInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput"></a>

```csharp
public string DeltaSharingOrganizationNameInput { get; }
```

- *Type:* string

---

##### `DeltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSecondsInput { get; }
```

- *Type:* double

---

##### `DeltaSharingScopeInput`<sup>Optional</sup> <a name="DeltaSharingScopeInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput"></a>

```csharp
public string DeltaSharingScopeInput { get; }
```

- *Type:* string

---

##### `ExternalAccessEnabledInput`<sup>Optional</sup> <a name="ExternalAccessEnabledInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput"></a>

```csharp
public bool|IResolvable ExternalAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput"></a>

```csharp
public string GlobalMetastoreIdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PrivilegeModelVersionInput`<sup>Optional</sup> <a name="PrivilegeModelVersionInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput"></a>

```csharp
public string PrivilegeModelVersionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StorageRootCredentialIdInput`<sup>Optional</sup> <a name="StorageRootCredentialIdInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput"></a>

```csharp
public string StorageRootCredentialIdInput { get; }
```

- *Type:* string

---

##### `StorageRootCredentialNameInput`<sup>Optional</sup> <a name="StorageRootCredentialNameInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput"></a>

```csharp
public string StorageRootCredentialNameInput { get; }
```

- *Type:* string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootInput"></a>

```csharp
public string StorageRootInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloud"></a>

```csharp
public string Cloud { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DefaultDataAccessConfigId`<sup>Required</sup> <a name="DefaultDataAccessConfigId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId"></a>

```csharp
public string DefaultDataAccessConfigId { get; }
```

- *Type:* string

---

##### `DeltaSharingOrganizationName`<sup>Required</sup> <a name="DeltaSharingOrganizationName" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName"></a>

```csharp
public string DeltaSharingOrganizationName { get; }
```

- *Type:* string

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSeconds { get; }
```

- *Type:* double

---

##### `DeltaSharingScope`<sup>Required</sup> <a name="DeltaSharingScope" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScope"></a>

```csharp
public string DeltaSharingScope { get; }
```

- *Type:* string

---

##### `ExternalAccessEnabled`<sup>Required</sup> <a name="ExternalAccessEnabled" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled"></a>

```csharp
public bool|IResolvable ExternalAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PrivilegeModelVersion`<sup>Required</sup> <a name="PrivilegeModelVersion" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion"></a>

```csharp
public string PrivilegeModelVersion { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRoot"></a>

```csharp
public string StorageRoot { get; }
```

- *Type:* string

---

##### `StorageRootCredentialId`<sup>Required</sup> <a name="StorageRootCredentialId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId"></a>

```csharp
public string StorageRootCredentialId { get; }
```

- *Type:* string

---

##### `StorageRootCredentialName`<sup>Required</sup> <a name="StorageRootCredentialName" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName"></a>

```csharp
public string StorageRootCredentialName { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCurrentMetastoreMetastoreInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---


### DataDatabricksCurrentMetastoreProviderConfigOutputReference <a name="DataDatabricksCurrentMetastoreProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksCurrentMetastoreProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig">DataDatabricksCurrentMetastoreProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCurrentMetastoreProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreProviderConfig">DataDatabricksCurrentMetastoreProviderConfig</a>

---



