# `dataDatabricksMaterializedFeaturesFeatureTag` Submodule <a name="`dataDatabricksMaterializedFeaturesFeatureTag` Submodule" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMaterializedFeaturesFeatureTag <a name="DataDatabricksMaterializedFeaturesFeatureTag" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTag(Construct Scope, string Id, DataDatabricksMaterializedFeaturesFeatureTagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig">DataDatabricksMaterializedFeaturesFeatureTagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig">DataDatabricksMaterializedFeaturesFeatureTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksMaterializedFeaturesFeatureTagProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTag resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTag.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTag.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksMaterializedFeaturesFeatureTag resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMaterializedFeaturesFeatureTag to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.key">Key</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfig"></a>

```csharp
public DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMaterializedFeaturesFeatureTagConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Key,
    DataDatabricksMaterializedFeaturesFeatureTagProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/materialized_features_feature_tag#provider_config DataDatabricksMaterializedFeaturesFeatureTag#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.providerConfig"></a>

```csharp
public DataDatabricksMaterializedFeaturesFeatureTagProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/materialized_features_feature_tag#provider_config DataDatabricksMaterializedFeaturesFeatureTag#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/materialized_features_feature_tag#workspace_id DataDatabricksMaterializedFeaturesFeatureTag#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/materialized_features_feature_tag#workspace_id DataDatabricksMaterializedFeaturesFeatureTag#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---



