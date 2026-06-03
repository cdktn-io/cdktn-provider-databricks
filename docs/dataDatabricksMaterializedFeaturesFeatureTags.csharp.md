# `dataDatabricksMaterializedFeaturesFeatureTags` Submodule <a name="`dataDatabricksMaterializedFeaturesFeatureTags` Submodule" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMaterializedFeaturesFeatureTags <a name="DataDatabricksMaterializedFeaturesFeatureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags databricks_materialized_features_feature_tags}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTags(Construct Scope, string Id, DataDatabricksMaterializedFeaturesFeatureTagsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig">DataDatabricksMaterializedFeaturesFeatureTagsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig">DataDatabricksMaterializedFeaturesFeatureTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTags resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTags.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTags.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTags.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTags.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTags resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMaterializedFeaturesFeatureTags to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMaterializedFeaturesFeatureTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMaterializedFeaturesFeatureTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureTags">FeatureTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureNameInput">FeatureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureName">FeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `FeatureTags`<sup>Required</sup> <a name="FeatureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureTags"></a>

```csharp
public DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList FeatureTags { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfig"></a>

```csharp
public DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference</a>

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureNameInput"></a>

```csharp
public string FeatureNameInput { get; }
```

- *Type:* string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureName"></a>

```csharp
public string FeatureName { get; }
```

- *Type:* string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMaterializedFeaturesFeatureTagsConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FeatureName,
    string TableName,
    double PageSize = null,
    DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.featureName">FeatureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.featureName"></a>

```csharp
public string FeatureName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.providerConfig"></a>

```csharp
public DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags {
    string Key,
    DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#key DataDatabricksMaterializedFeaturesFeatureTags#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#key DataDatabricksMaterializedFeaturesFeatureTags#key}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.providerConfig"></a>

```csharp
public DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#provider_config DataDatabricksMaterializedFeaturesFeatureTags#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/materialized_features_feature_tags#workspace_id DataDatabricksMaterializedFeaturesFeatureTags#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get"></a>

```csharp
private DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>[]

---


### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>

---


### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsProviderConfig</a>

---


### DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagsProviderConfig</a>

---



