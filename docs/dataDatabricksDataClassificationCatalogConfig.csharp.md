# `dataDatabricksDataClassificationCatalogConfig` Submodule <a name="`dataDatabricksDataClassificationCatalogConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataClassificationCatalogConfig <a name="DataDatabricksDataClassificationCatalogConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config databricks_data_classification_catalog_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfig(Construct Scope, string Id, DataDatabricksDataClassificationCatalogConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig">DataDatabricksDataClassificationCatalogConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig">DataDatabricksDataClassificationCatalogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksDataClassificationCatalogConfigProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDataClassificationCatalogConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDataClassificationCatalogConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDataClassificationCatalogConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksDataClassificationCatalogConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksDataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDataClassificationCatalogConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDataClassificationCatalogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataClassificationCatalogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.autoTagConfigs">AutoTagConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList">DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.excludedSchemas">ExcludedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.includedSchemas">IncludedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference">DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AutoTagConfigs`<sup>Required</sup> <a name="AutoTagConfigs" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.autoTagConfigs"></a>

```csharp
public DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList AutoTagConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList">DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList</a>

---

##### `ExcludedSchemas`<sup>Required</sup> <a name="ExcludedSchemas" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.excludedSchemas"></a>

```csharp
public DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference ExcludedSchemas { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference</a>

---

##### `IncludedSchemas`<sup>Required</sup> <a name="IncludedSchemas" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.includedSchemas"></a>

```csharp
public DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference IncludedSchemas { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfig"></a>

```csharp
public DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference">DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksDataClassificationCatalogConfigProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataClassificationCatalogConfigAutoTagConfigs <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigs" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigAutoTagConfigs {
    string AutoTaggingMode,
    string ClassificationTag
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode">AutoTaggingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#auto_tagging_mode DataDatabricksDataClassificationCatalogConfig#auto_tagging_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.classificationTag">ClassificationTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#classification_tag DataDatabricksDataClassificationCatalogConfig#classification_tag}. |

---

##### `AutoTaggingMode`<sup>Required</sup> <a name="AutoTaggingMode" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode"></a>

```csharp
public string AutoTaggingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#auto_tagging_mode DataDatabricksDataClassificationCatalogConfig#auto_tagging_mode}.

---

##### `ClassificationTag`<sup>Required</sup> <a name="ClassificationTag" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.classificationTag"></a>

```csharp
public string ClassificationTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#classification_tag DataDatabricksDataClassificationCatalogConfig#classification_tag}.

---

### DataDatabricksDataClassificationCatalogConfigConfig <a name="DataDatabricksDataClassificationCatalogConfigConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksDataClassificationCatalogConfigProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#name DataDatabricksDataClassificationCatalogConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#provider_config DataDatabricksDataClassificationCatalogConfig#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#name DataDatabricksDataClassificationCatalogConfig#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.providerConfig"></a>

```csharp
public DataDatabricksDataClassificationCatalogConfigProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#provider_config DataDatabricksDataClassificationCatalogConfig#provider_config}.

---

### DataDatabricksDataClassificationCatalogConfigExcludedSchemas <a name="DataDatabricksDataClassificationCatalogConfigExcludedSchemas" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigExcludedSchemas {
    string[] Names
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.property.names">Names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}. |

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.property.names"></a>

```csharp
public string[] Names { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}.

---

### DataDatabricksDataClassificationCatalogConfigIncludedSchemas <a name="DataDatabricksDataClassificationCatalogConfigIncludedSchemas" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigIncludedSchemas {
    string[] Names
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.property.names">Names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}. |

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.property.names"></a>

```csharp
public string[] Names { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}.

---

### DataDatabricksDataClassificationCatalogConfigProviderConfig <a name="DataDatabricksDataClassificationCatalogConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#workspace_id DataDatabricksDataClassificationCatalogConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/data_classification_catalog_config#workspace_id DataDatabricksDataClassificationCatalogConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get"></a>

```csharp
private DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataClassificationCatalogConfigAutoTagConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a>[]

---


### DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput">AutoTaggingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput">ClassificationTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode">AutoTaggingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag">ClassificationTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoTaggingModeInput`<sup>Optional</sup> <a name="AutoTaggingModeInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput"></a>

```csharp
public string AutoTaggingModeInput { get; }
```

- *Type:* string

---

##### `ClassificationTagInput`<sup>Optional</sup> <a name="ClassificationTagInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput"></a>

```csharp
public string ClassificationTagInput { get; }
```

- *Type:* string

---

##### `AutoTaggingMode`<sup>Required</sup> <a name="AutoTaggingMode" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode"></a>

```csharp
public string AutoTaggingMode { get; }
```

- *Type:* string

---

##### `ClassificationTag`<sup>Required</sup> <a name="ClassificationTag" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag"></a>

```csharp
public string ClassificationTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDataClassificationCatalogConfigAutoTagConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a>

---


### DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference <a name="DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.namesInput">NamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas">DataDatabricksDataClassificationCatalogConfigExcludedSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.namesInput"></a>

```csharp
public string[] NamesInput { get; }
```

- *Type:* string[]

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDataClassificationCatalogConfigExcludedSchemas InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas">DataDatabricksDataClassificationCatalogConfigExcludedSchemas</a>

---


### DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference <a name="DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput">NamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas">DataDatabricksDataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput"></a>

```csharp
public string[] NamesInput { get; }
```

- *Type:* string[]

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDataClassificationCatalogConfigIncludedSchemas InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas">DataDatabricksDataClassificationCatalogConfigIncludedSchemas</a>

---


### DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference <a name="DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataClassificationCatalogConfigProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

---



