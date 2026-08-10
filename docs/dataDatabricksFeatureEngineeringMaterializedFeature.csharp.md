# `dataDatabricksFeatureEngineeringMaterializedFeature` Submodule <a name="`dataDatabricksFeatureEngineeringMaterializedFeature` Submodule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeature <a name="DataDatabricksFeatureEngineeringMaterializedFeature" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeature(Construct Scope, string Id, DataDatabricksFeatureEngineeringMaterializedFeatureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig">DataDatabricksFeatureEngineeringMaterializedFeatureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig">DataDatabricksFeatureEngineeringMaterializedFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksFeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksFeatureEngineeringMaterializedFeature.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksFeatureEngineeringMaterializedFeature.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksFeatureEngineeringMaterializedFeature.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksFeatureEngineeringMaterializedFeature.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksFeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeature to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksFeatureEngineeringMaterializedFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronSchedule">CronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronScheduleTrigger">CronScheduleTrigger</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.featureName">FeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.isOnline">IsOnline</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lastMaterializationTime">LastMaterializationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.pipelineScheduleState">PipelineScheduleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.streamingMode">StreamingMode</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableTrigger">TableTrigger</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureIdInput">MaterializedFeatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureId">MaterializedFeatureId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CronSchedule`<sup>Required</sup> <a name="CronSchedule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronSchedule"></a>

```csharp
public string CronSchedule { get; }
```

- *Type:* string

---

##### `CronScheduleTrigger`<sup>Required</sup> <a name="CronScheduleTrigger" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronScheduleTrigger"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference CronScheduleTrigger { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference</a>

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.featureName"></a>

```csharp
public string FeatureName { get; }
```

- *Type:* string

---

##### `IsOnline`<sup>Required</sup> <a name="IsOnline" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.isOnline"></a>

```csharp
public IResolvable IsOnline { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastMaterializationTime`<sup>Required</sup> <a name="LastMaterializationTime" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lastMaterializationTime"></a>

```csharp
public string LastMaterializationTime { get; }
```

- *Type:* string

---

##### `OfflineStoreConfig`<sup>Required</sup> <a name="OfflineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.offlineStoreConfig"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference OfflineStoreConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a>

---

##### `OnlineStoreConfig`<sup>Required</sup> <a name="OnlineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.onlineStoreConfig"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference OnlineStoreConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a>

---

##### `PipelineScheduleState`<sup>Required</sup> <a name="PipelineScheduleState" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.pipelineScheduleState"></a>

```csharp
public string PipelineScheduleState { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfig"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference</a>

---

##### `StreamingMode`<sup>Required</sup> <a name="StreamingMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.streamingMode"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference StreamingMode { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `TableTrigger`<sup>Required</sup> <a name="TableTrigger" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableTrigger"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference TableTrigger { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference</a>

---

##### `MaterializedFeatureIdInput`<sup>Optional</sup> <a name="MaterializedFeatureIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureIdInput"></a>

```csharp
public string MaterializedFeatureIdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

---

##### `MaterializedFeatureId`<sup>Required</sup> <a name="MaterializedFeatureId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureId"></a>

```csharp
public string MaterializedFeatureId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatureConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MaterializedFeatureId,
    DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.materializedFeatureId">MaterializedFeatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#provider_config DataDatabricksFeatureEngineeringMaterializedFeature#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MaterializedFeatureId`<sup>Required</sup> <a name="MaterializedFeatureId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.materializedFeatureId"></a>

```csharp
public string MaterializedFeatureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.providerConfig"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#provider_config DataDatabricksFeatureEngineeringMaterializedFeature#provider_config}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger <a name="DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger {
    string CronExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#cron_expression DataDatabricksFeatureEngineeringMaterializedFeature#cron_expression}. |

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#cron_expression DataDatabricksFeatureEngineeringMaterializedFeature#cron_expression}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig {
    string CatalogName,
    string SchemaName,
    string TableNamePrefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}.

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig {
    string CatalogName,
    string OnlineStoreName,
    string SchemaName,
    string TableNamePrefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.onlineStoreName">OnlineStoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#online_store_name DataDatabricksFeatureEngineeringMaterializedFeature#online_store_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `OnlineStoreName`<sup>Required</sup> <a name="OnlineStoreName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.onlineStoreName"></a>

```csharp
public string OnlineStoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#online_store_name DataDatabricksFeatureEngineeringMaterializedFeature#online_store_name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}.

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#workspace_id DataDatabricksFeatureEngineeringMaterializedFeature#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#workspace_id DataDatabricksFeatureEngineeringMaterializedFeature#workspace_id}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode <a name="DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode {
    string FreshnessTarget = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.property.freshnessTarget">FreshnessTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#freshness_target DataDatabricksFeatureEngineeringMaterializedFeature#freshness_target}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#mode DataDatabricksFeatureEngineeringMaterializedFeature#mode}. |

---

##### `FreshnessTarget`<sup>Optional</sup> <a name="FreshnessTarget" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.property.freshnessTarget"></a>

```csharp
public string FreshnessTarget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#freshness_target DataDatabricksFeatureEngineeringMaterializedFeature#freshness_target}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/feature_engineering_materialized_feature#mode DataDatabricksFeatureEngineeringMaterializedFeature#mode}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger <a name="DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger">DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger">DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```csharp
public string TableNamePrefixInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreNameInput">OnlineStoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreName">OnlineStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `OnlineStoreNameInput`<sup>Optional</sup> <a name="OnlineStoreNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreNameInput"></a>

```csharp
public string OnlineStoreNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```csharp
public string TableNamePrefixInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `OnlineStoreName`<sup>Required</sup> <a name="OnlineStoreName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreName"></a>

```csharp
public string OnlineStoreName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetFreshnessTarget">ResetFreshnessTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFreshnessTarget` <a name="ResetFreshnessTarget" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetFreshnessTarget"></a>

```csharp
private void ResetFreshnessTarget()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTargetInput">FreshnessTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTarget">FreshnessTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode">DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FreshnessTargetInput`<sup>Optional</sup> <a name="FreshnessTargetInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTargetInput"></a>

```csharp
public string FreshnessTargetInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `FreshnessTarget`<sup>Required</sup> <a name="FreshnessTarget" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTarget"></a>

```csharp
public string FreshnessTarget { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode">DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger">DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger">DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger</a>

---



