# `complianceSecurityProfileWorkspaceSetting` Submodule <a name="`complianceSecurityProfileWorkspaceSetting` Submodule" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceSecurityProfileWorkspaceSetting <a name="ComplianceSecurityProfileWorkspaceSetting" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting databricks_compliance_security_profile_workspace_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ComplianceSecurityProfileWorkspaceSetting(Construct Scope, string Id, ComplianceSecurityProfileWorkspaceSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig">ComplianceSecurityProfileWorkspaceSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig">ComplianceSecurityProfileWorkspaceSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace">PutComplianceSecurityProfileWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComplianceSecurityProfileWorkspace` <a name="PutComplianceSecurityProfileWorkspace" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace"></a>

```csharp
private void PutComplianceSecurityProfileWorkspace(ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putProviderConfig"></a>

```csharp
private void PutProviderConfig(ComplianceSecurityProfileWorkspaceSettingProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetSettingName"></a>

```csharp
private void ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ComplianceSecurityProfileWorkspaceSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ComplianceSecurityProfileWorkspaceSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ComplianceSecurityProfileWorkspaceSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ComplianceSecurityProfileWorkspaceSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComplianceSecurityProfileWorkspaceSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComplianceSecurityProfileWorkspaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComplianceSecurityProfileWorkspaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference">ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspaceInput">ComplianceSecurityProfileWorkspaceInput</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComplianceSecurityProfileWorkspace`<sup>Required</sup> <a name="ComplianceSecurityProfileWorkspace" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspace"></a>

```csharp
public ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference ComplianceSecurityProfileWorkspace { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.providerConfig"></a>

```csharp
public ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference">ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference</a>

---

##### `ComplianceSecurityProfileWorkspaceInput`<sup>Optional</sup> <a name="ComplianceSecurityProfileWorkspaceInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspaceInput"></a>

```csharp
public ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace ComplianceSecurityProfileWorkspaceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.providerConfigInput"></a>

```csharp
public ComplianceSecurityProfileWorkspaceSettingProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace <a name="ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace {
    string[] ComplianceStandards,
    bool|IResolvable IsEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.complianceStandards">ComplianceStandards</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}. |

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.complianceStandards"></a>

```csharp
public string[] ComplianceStandards { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}.

---

### ComplianceSecurityProfileWorkspaceSettingConfig <a name="ComplianceSecurityProfileWorkspaceSettingConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ComplianceSecurityProfileWorkspaceSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace ComplianceSecurityProfileWorkspace,
    string Etag = null,
    string Id = null,
    ComplianceSecurityProfileWorkspaceSettingProviderConfig ProviderConfig = null,
    string SettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.complianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | compliance_security_profile_workspace block. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComplianceSecurityProfileWorkspace`<sup>Required</sup> <a name="ComplianceSecurityProfileWorkspace" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.complianceSecurityProfileWorkspace"></a>

```csharp
public ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace ComplianceSecurityProfileWorkspace { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

compliance_security_profile_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#compliance_security_profile_workspace ComplianceSecurityProfileWorkspaceSetting#compliance_security_profile_workspace}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.providerConfig"></a>

```csharp
public ComplianceSecurityProfileWorkspaceSettingProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#provider_config ComplianceSecurityProfileWorkspaceSetting#provider_config}

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}.

---

### ComplianceSecurityProfileWorkspaceSettingProviderConfig <a name="ComplianceSecurityProfileWorkspaceSettingProviderConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ComplianceSecurityProfileWorkspaceSettingProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#workspace_id ComplianceSecurityProfileWorkspaceSetting#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/compliance_security_profile_workspace_setting#workspace_id ComplianceSecurityProfileWorkspaceSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference <a name="ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandardsInput">ComplianceStandardsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandards">ComplianceStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceStandardsInput`<sup>Optional</sup> <a name="ComplianceStandardsInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandardsInput"></a>

```csharp
public string[] ComplianceStandardsInput { get; }
```

- *Type:* string[]

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandards"></a>

```csharp
public string[] ComplianceStandards { get; }
```

- *Type:* string[]

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.internalValue"></a>

```csharp
public ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---


### ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference <a name="ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.internalValue"></a>

```csharp
public ComplianceSecurityProfileWorkspaceSettingProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a>

---



