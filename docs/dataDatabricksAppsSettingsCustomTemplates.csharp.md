# `dataDatabricksAppsSettingsCustomTemplates` Submodule <a name="`dataDatabricksAppsSettingsCustomTemplates` Submodule" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppsSettingsCustomTemplates <a name="DataDatabricksAppsSettingsCustomTemplates" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates databricks_apps_settings_custom_templates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplates(Construct Scope, string Id, DataDatabricksAppsSettingsCustomTemplatesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig">DataDatabricksAppsSettingsCustomTemplatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig">DataDatabricksAppsSettingsCustomTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAppsSettingsCustomTemplatesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAppsSettingsCustomTemplates resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAppsSettingsCustomTemplates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAppsSettingsCustomTemplates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAppsSettingsCustomTemplates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAppsSettingsCustomTemplates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAppsSettingsCustomTemplates resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAppsSettingsCustomTemplates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAppsSettingsCustomTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppsSettingsCustomTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference">DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.templates">Templates</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList">DataDatabricksAppsSettingsCustomTemplatesTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.providerConfig"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference">DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference</a>

---

##### `Templates`<sup>Required</sup> <a name="Templates" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.templates"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesList Templates { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList">DataDatabricksAppsSettingsCustomTemplatesTemplatesList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsSettingsCustomTemplatesConfig <a name="DataDatabricksAppsSettingsCustomTemplatesConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksAppsSettingsCustomTemplatesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#page_size DataDatabricksAppsSettingsCustomTemplates#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#provider_config DataDatabricksAppsSettingsCustomTemplates#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#page_size DataDatabricksAppsSettingsCustomTemplates#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#provider_config DataDatabricksAppsSettingsCustomTemplates#provider_config}.

---

### DataDatabricksAppsSettingsCustomTemplatesProviderConfig <a name="DataDatabricksAppsSettingsCustomTemplatesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#workspace_id DataDatabricksAppsSettingsCustomTemplates#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#workspace_id DataDatabricksAppsSettingsCustomTemplates#workspace_id}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplates <a name="DataDatabricksAppsSettingsCustomTemplatesTemplates" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplates {
    string Name,
    DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#provider_config DataDatabricksAppsSettingsCustomTemplates#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.providerConfig"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#provider_config DataDatabricksAppsSettingsCustomTemplates#provider_config}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest {
    string Name,
    double Version,
    string Description = null,
    IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs[] ResourceSpecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#version DataDatabricksAppsSettingsCustomTemplates#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.resourceSpecs">ResourceSpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#resource_specs DataDatabricksAppsSettingsCustomTemplates#resource_specs}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#version DataDatabricksAppsSettingsCustomTemplates#version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}.

---

##### `ResourceSpecs`<sup>Optional</sup> <a name="ResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.resourceSpecs"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs[] ResourceSpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#resource_specs DataDatabricksAppsSettingsCustomTemplates#resource_specs}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs {
    string Name,
    string Description = null,
    DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec ExperimentSpec = null,
    DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec JobSpec = null,
    DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec SecretSpec = null,
    DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec ServingEndpointSpec = null,
    DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec SqlWarehouseSpec = null,
    DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec UcSecurableSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.experimentSpec">ExperimentSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#experiment_spec DataDatabricksAppsSettingsCustomTemplates#experiment_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#job_spec DataDatabricksAppsSettingsCustomTemplates#job_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#secret_spec DataDatabricksAppsSettingsCustomTemplates#secret_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplates#serving_endpoint_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplates#sql_warehouse_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#uc_securable_spec DataDatabricksAppsSettingsCustomTemplates#uc_securable_spec}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}.

---

##### `ExperimentSpec`<sup>Optional</sup> <a name="ExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.experimentSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec ExperimentSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#experiment_spec DataDatabricksAppsSettingsCustomTemplates#experiment_spec}.

---

##### `JobSpec`<sup>Optional</sup> <a name="JobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.jobSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec JobSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#job_spec DataDatabricksAppsSettingsCustomTemplates#job_spec}.

---

##### `SecretSpec`<sup>Optional</sup> <a name="SecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.secretSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec SecretSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#secret_spec DataDatabricksAppsSettingsCustomTemplates#secret_spec}.

---

##### `ServingEndpointSpec`<sup>Optional</sup> <a name="ServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.servingEndpointSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec ServingEndpointSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplates#serving_endpoint_spec}.

---

##### `SqlWarehouseSpec`<sup>Optional</sup> <a name="SqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec SqlWarehouseSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplates#sql_warehouse_spec}.

---

##### `UcSecurableSpec`<sup>Optional</sup> <a name="UcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.ucSecurableSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec UcSecurableSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#uc_securable_spec DataDatabricksAppsSettingsCustomTemplates#uc_securable_spec}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec {
    string Permission,
    string SecurableType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.property.securableType">SecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#securable_type DataDatabricksAppsSettingsCustomTemplates#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```csharp
public string SecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#securable_type DataDatabricksAppsSettingsCustomTemplates#securable_type}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#workspace_id DataDatabricksAppsSettingsCustomTemplates#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/apps_settings_custom_templates#workspace_id DataDatabricksAppsSettingsCustomTemplates#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesProviderConfig</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesList <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesList" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.get"></a>

```csharp
private DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates">DataDatabricksAppsSettingsCustomTemplatesTemplates</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplates[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates">DataDatabricksAppsSettingsCustomTemplatesTemplates</a>[]

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.putResourceSpecs">PutResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resetResourceSpecs">ResetResourceSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceSpecs` <a name="PutResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.putResourceSpecs"></a>

```csharp
private void PutResourceSpecs(IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetResourceSpecs` <a name="ResetResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resetResourceSpecs"></a>

```csharp
private void ResetResourceSpecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.resourceSpecs">ResourceSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.resourceSpecsInput">ResourceSpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceSpecs`<sup>Required</sup> <a name="ResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.resourceSpecs"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList ResourceSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceSpecsInput`<sup>Optional</sup> <a name="ResourceSpecsInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.resourceSpecsInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs[] ResourceSpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a>[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.get"></a>

```csharp
private DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a>[]

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putExperimentSpec">PutExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSecretSpec">PutSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putServingEndpointSpec">PutServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSqlWarehouseSpec">PutSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putUcSecurableSpec">PutUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetExperimentSpec">ResetExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetJobSpec">ResetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetSecretSpec">ResetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetServingEndpointSpec">ResetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">ResetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetUcSecurableSpec">ResetUcSecurableSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExperimentSpec` <a name="PutExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putExperimentSpec"></a>

```csharp
private void PutExperimentSpec(DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putExperimentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec</a>

---

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putJobSpec"></a>

```csharp
private void PutJobSpec(DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a>

---

##### `PutSecretSpec` <a name="PutSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSecretSpec"></a>

```csharp
private void PutSecretSpec(DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a>

---

##### `PutServingEndpointSpec` <a name="PutServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```csharp
private void PutServingEndpointSpec(DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a>

---

##### `PutSqlWarehouseSpec` <a name="PutSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```csharp
private void PutSqlWarehouseSpec(DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `PutUcSecurableSpec` <a name="PutUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```csharp
private void PutUcSecurableSpec(DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExperimentSpec` <a name="ResetExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetExperimentSpec"></a>

```csharp
private void ResetExperimentSpec()
```

##### `ResetJobSpec` <a name="ResetJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetJobSpec"></a>

```csharp
private void ResetJobSpec()
```

##### `ResetSecretSpec` <a name="ResetSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```csharp
private void ResetSecretSpec()
```

##### `ResetServingEndpointSpec` <a name="ResetServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```csharp
private void ResetServingEndpointSpec()
```

##### `ResetSqlWarehouseSpec` <a name="ResetSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```csharp
private void ResetSqlWarehouseSpec()
```

##### `ResetUcSecurableSpec` <a name="ResetUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```csharp
private void ResetUcSecurableSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.experimentSpec">ExperimentSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.experimentSpecInput">ExperimentSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.jobSpecInput">JobSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.secretSpecInput">SecretSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">ServingEndpointSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">SqlWarehouseSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">UcSecurableSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExperimentSpec`<sup>Required</sup> <a name="ExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.experimentSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference ExperimentSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference</a>

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.jobSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference JobSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference</a>

---

##### `SecretSpec`<sup>Required</sup> <a name="SecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.secretSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference SecretSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `ServingEndpointSpec`<sup>Required</sup> <a name="ServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference ServingEndpointSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `SqlWarehouseSpec`<sup>Required</sup> <a name="SqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference SqlWarehouseSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `UcSecurableSpec`<sup>Required</sup> <a name="UcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference UcSecurableSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExperimentSpecInput`<sup>Optional</sup> <a name="ExperimentSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.experimentSpecInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec ExperimentSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec</a>

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec JobSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretSpecInput`<sup>Optional</sup> <a name="SecretSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec SecretSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a>

---

##### `ServingEndpointSpecInput`<sup>Optional</sup> <a name="ServingEndpointSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec ServingEndpointSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a>

---

##### `SqlWarehouseSpecInput`<sup>Optional</sup> <a name="SqlWarehouseSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec SqlWarehouseSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `UcSecurableSpecInput`<sup>Optional</sup> <a name="UcSecurableSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec UcSecurableSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```csharp
public string SecurableTypeInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitProvider">GitProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitRepo">GitRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.manifest">Manifest</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates">DataDatabricksAppsSettingsCustomTemplatesTemplates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitProvider"></a>

```csharp
public string GitProvider { get; }
```

- *Type:* string

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitRepo"></a>

```csharp
public string GitRepo { get; }
```

- *Type:* string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.manifest"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference Manifest { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplatesTemplates InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates">DataDatabricksAppsSettingsCustomTemplatesTemplates</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig">DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig</a>

---



